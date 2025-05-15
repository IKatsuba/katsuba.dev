import { render } from '@react-email/render';

import { CheckoutEmail, CheckoutEmailProps } from './checkout';
import { resend } from '@/lib/resend';

export async function sendCheckoutEmail(
  input: CheckoutEmailProps & {
    recipient: string;
  },
): Promise<void> {
  const component = CheckoutEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await resend.emails.send({
    from: 'igor@katsuba.dev',
    to: input.recipient,
    subject: `Consultation Payment`,
    html,
    text,
  });
}
