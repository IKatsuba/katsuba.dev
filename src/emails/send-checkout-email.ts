import { render } from '@react-email/render';
import { Resend } from 'resend';

import { CheckoutEmail, CheckoutEmailProps } from './checkout';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCheckoutEmail(
  input: CheckoutEmailProps & { recipient: string },
): Promise<void> {
  const component = CheckoutEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await resend.emails.send({
    from: 'noreply@cal.com',
    to: input.recipient,
    subject: `Checkout`,
    react: component,
  });
}
