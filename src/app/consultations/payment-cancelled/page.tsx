import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata: Metadata = {
  title: 'Payment Not Completed',
  description: 'Your payment was cancelled or not completed.',
};

export default function PaymentCancelled() {
  return (
    <SimpleLayout
      title="Payment was not completed"
      intro="Your payment was cancelled or not completed. If you have any questions, please contact me and I will help you."
    />
  );
}
