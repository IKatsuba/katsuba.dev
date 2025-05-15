import { NextResponse } from 'next/server';
import crypto from 'crypto';
import Stripe from 'stripe';

const SECRET = process.env.CALCOM_WEBHOOK_SECRET! || 'secret';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get('x-cal-signature-256');

  // Генерируем HMAC SHA256
  const hmac = crypto.createHmac('sha256', SECRET);
  hmac.update(rawBody, 'utf8');
  const digest = hmac.digest('hex');

  // Сравниваем подписи
  if (digest !== signature) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
  }

  // Если подпись валидна, парсим body и продолжаем обработку
  const body = JSON.parse(rawBody) as {
    triggerEvent:
      | 'BOOKING_CREATED'
      | 'BOOKING_CANCELLED'
      | 'BOOKING_REJECTED'
      | 'BOOKING_REQUESTED';
    payload: {
      uid: string;
      type: string;
      organizer: {
        email: string;
      };
    };
  };

  if (body.triggerEvent === 'BOOKING_REQUESTED') {
    const { uid, type, organizer } = body.payload;

    const prices = await stripe.prices.list({
      lookup_keys: [type],
    });

    if (prices.data.length === 0) {
      return NextResponse.json({ message: 'Internal error' }, { status: 500 });
    }

    const price = prices.data[0];

    const quantityLength = parseInt(price.metadata.quantityLength, 10);

    const session = await stripe.checkout.sessions.create({
      customer_email: organizer.email,
      line_items: [{ price: price.id, quantity: Math.max(Math.ceil(length / quantityLength), 1) }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consultations/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consultations/thank-you`,
      allow_promotion_codes: true,
      invoice_creation: {
        enabled: true,
      },
      metadata: {
        uid,
        type,
        length,
      },
    });

    // send email
  }

  return NextResponse.json({ message: 'Webhook received' });
}
