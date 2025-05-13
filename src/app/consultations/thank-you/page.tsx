import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Thank you for booking a consultation',
  description: 'Thanks for booking a consultation with me.',
};

export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{
    name: string;
  }>;
}) {
  const { name } = await searchParams;

  return (
    <SimpleLayout
      title="Thanks for booking a consultation."
      intro={`Hi ${name},

      I've received your booking request. I'll send you an email with the details of the meeting. If you have any questions, please don't hesitate to contact me.`}
    >
      <Button href="/consultations">Book another consultation</Button>
    </SimpleLayout>
  );
}
