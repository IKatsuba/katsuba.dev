import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const event = await verifyWebhookSignature(request);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const uid = session.metadata?.uid;

        if (!uid) {
          throw new Error('Missing metadata');
        }

        const response = await fetch(
          `${process.env.CALCOM_API_URL || 'https://api.cal.com/v2'}/bookings/${uid}/confirm`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.CAL_API_KEY}`,
              'cal-api-version': '2024-08-13',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to confirm booking');
        }

        console.log(`Booking confirmed: ${uid}`);

        return NextResponse.json({ message: 'Booking confirmed' });
      }
    }

    return NextResponse.json({ message: 'Webhook received' });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: 'Webhook error' }, { status: 400 });
  }
}

async function verifyWebhookSignature(request: Request): Promise<Stripe.Event> {
  const body = await request.clone().text();
  const signatureKey = `stripe-signature`;
  const signature = request.headers.get(signatureKey);
  if (!signature) {
    throw new Error('Missing stripe-signature');
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error('Missing stripe webhook secret');
  }

  const event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  if (!event) {
    throw new Error('Invalid signature');
  }

  return event;
}
