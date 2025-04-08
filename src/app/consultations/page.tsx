import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Booking } from '@/components/Booking'


export const metadata: Metadata = {
  title: 'Consultations',
  description:
    'Book a consultation with me to discuss your project or business needs.',
}

export default async function ArticlesIndex() {
  const response = await fetch('https://api.cal.com/v2/event-types?username=katsuba', {
    headers: {
      'Authorization': `Bearer ${process.env.CAL_API_KEY}`,
      'cal-api-version': '2024-06-14'
    },
    next: {
      revalidate: 60 * 60 // 1 hour
    }
  })

  const json = await response.json();

  const services = json.data.map((eventType: any) => ({
    title: eventType.title,
    description: eventType.description,
    duration: `${eventType.lengthInMinutes}m`,
    price: `$${eventType.price / 100}`,
    calLink: `https://cal.com/katsuba/${eventType.slug}`
  }))


  return (
    <SimpleLayout
      title="Consultations"
      intro="Book a consultation with me to discuss your project or business needs."
    >
      <div>
        <div className="flex max-w-3xl flex-col space-y-16">
          <Booking services={services} />
        </div>
      </div>
    </SimpleLayout>
  )
}
