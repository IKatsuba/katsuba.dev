import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Booking } from '@/components/Booking'


export const metadata: Metadata = {
  title: 'Consultations',
  description:
    'Book a consultation with me to discuss your project or business needs.',
}

export default async function ArticlesIndex() {

  return (
    <SimpleLayout
      title="Consultations"
      intro="Book a consultation with me to discuss your project or business needs."
    >
      <div>
        <div className="flex max-w-3xl flex-col space-y-16">
          <Booking />
        </div>
      </div>
    </SimpleLayout>
  )
}
