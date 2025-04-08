import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

const services = [
  {
    title: 'SaaS / AI Product Review',
    description: 'Get honest, constructive feedback on your UX, AI strategy, and developer experience.',
    duration: '90m',
    price: '$150.00',
    calLink: '/katsuba/saas-ai-product-review'
  },
  {
    title: 'AI for Developers',
    description: 'Curious how to integrate AI into your dev workflow?',
    duration: '60m',
    price: '$120.00',
    calLink: '/katsuba/ai-for-developers'
  },
  {
    title: 'Frontend Architecture Advice',
    description: 'Need a second opinion on your project\'s frontend architecture?',
    duration: '60m',
    price: '$120.00',
    calLink: '/katsuba/frontend-architecture-advice'
  },
  {
    title: 'Mock Interview',
    description: 'A real-world mock interview tailored to your desired role.',
    duration: '60m',
    price: '$100.00',
    calLink: '/katsuba/mock-interview'
  },
  {
    title: 'Resume Review',
    description: 'A quick and focused session to review your resume, GitHub, or LinkedIn.',
    duration: '15m',
    price: '$25.00',
    calLink: '/katsuba/resume-review'
  },
  {
    title: 'Career Consultation',
    description: 'Get personalized advice on your tech career. Whether you\'re aiming for your first dev job, planning to go international, or preparing for an interview — I can help.',
    duration: '60m',
    price: '$80.00',
    calLink: '/katsuba/career-consultation'
  }
]

export function Booking() {
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <Card.Title href={`https://cal.com${service.calLink}`}>{service.title}</Card.Title>
            <Card.Description>{service.description}</Card.Description>

            <Card.Eyebrow>
              {service.duration} / {service.price}
            </Card.Eyebrow>

            <Card.Cta>
              Book now
            </Card.Cta>
          </Card>
        ))}
      </div>
    </div>
  )
} 