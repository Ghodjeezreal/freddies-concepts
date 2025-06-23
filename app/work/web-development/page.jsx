'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export default function CaseStudyPage() {
  const { slug } = useParams()

  // Simulated content — replace with CMS or JSON later
  const project = {
    title: 'Web Development',
    image: '/work/web.jpg',
    category: 'Web Design',
    description:
      'This project showcases our approach to building high-impact digital platforms. We focused on responsive design, fast performance, and brand alignment.',
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm uppercase text-green-400 mb-4">
          {project.category}
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}
