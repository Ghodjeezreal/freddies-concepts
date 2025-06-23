// components/FeatureCard.tsx
'use client'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
  cta?: string
  image: string
  reverse?: boolean
}

export default function FeatureCard({ title, description, cta, image, reverse }: FeatureCardProps) {
  return (
    <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 py-20 px-6 bg-black text-white`}>
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-xl font-semibold uppercase text-gray-400 mb-4">{title}</h3>
        <p className="text-lg text-gray-300 mb-4">{description}</p>
        {cta && (
          <a href="#" className="text-green-400 hover:underline uppercase text-sm font-medium">
            {cta}
          </a>
        )}
      </div>
    </section>
  )
}
