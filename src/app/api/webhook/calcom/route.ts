import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { stripe } from '@/lib/stripe';
import { sendCheckoutEmail } from '@/emails/send-checkout-email';

const SECRET = process.env.CALCOM_WEBHOOK_SECRET!;

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
        name: string;
      };
      length: number;
    };
  };

  if (body.triggerEvent === 'BOOKING_REQUESTED') {
    const { uid, type, organizer, length } = body.payload;

    const prices = await stripe.prices.list({
      lookup_keys: [type],
    });

    if (prices.data.length === 0) {
      return NextResponse.json({ message: 'Internal error' }, { status: 500 });
    }

    const price = prices.data[0];
    const quantityLength = parseInt(price.metadata.quantityLength, 10);

    const customers = await stripe.customers.list({
      email: organizer.email,
      limit: 1,
    });

    let customer = customers.data[0];

    if (!customer) {
      customer = await stripe.customers.create({
        email: organizer.email,
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items: [{ price: price.id, quantity: Math.max(Math.ceil(length / quantityLength), 1) }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consultations/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/consultations/payment-cancelled`,
      allow_promotion_codes: true,
      invoice_creation: {
        enabled: true,
      },
      metadata: {
        uid,
      },
      expires_at: Math.floor(Date.now() / 1000) + 60 * 60 * 1, // 1 hour
    });

    // send email
    await sendCheckoutEmail({
      name: organizer.name || organizer.email,
      length,
      price: (session.amount_total ?? 0) / 100,
      checkoutUrl: session.url!,
      recipient: organizer.email,
    });
  }

  return NextResponse.json({ message: 'Webhook received' });
}
