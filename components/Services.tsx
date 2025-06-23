import { Lightbulb, PenTool, Code } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Strategy',
      description: 'Workshops, product strategy, content, and brand planning to define your digital direction.',
      icon: Lightbulb,
    },
    {
      title: 'Design',
      description: 'Beautiful, user-centered interfaces that align with your vision and business needs.',
      icon: PenTool,
    },
    {
      title: 'Development',
      description: 'Fast, scalable code to bring your designs to life across the web and mobile.',
      icon: Code,
    },
  ]

  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-10">What We Do</h2>
        <div className="grid gap-12 md:grid-cols-3 text-left">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="group transition duration-300">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
