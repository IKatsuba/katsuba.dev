import { Card } from '@/components/Card';

export function Booking({
  services,
}: {
  services: {
    title: string;
    description: string;
    duration: string;
    price: string;
    calLink: string;
    slug: string;
    rawCost: number;
  }[];
}) {
  return (
    <div className="my-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <Card.Title href={service.calLink}>{service.title}</Card.Title>
            <Card.Description>{service.description}</Card.Description>

            <Card.Eyebrow>
              {service.duration} / {service.price}
            </Card.Eyebrow>

            <Card.Cta>Book now</Card.Cta>
          </Card>
        ))}
      </div>
    </div>
  );
}
