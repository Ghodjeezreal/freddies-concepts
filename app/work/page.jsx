// app/work/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Obazz Fc Website',
    description: 'A modern website for a standard football club.',
    image: '/work/web.jpg',
    href: '/work/web-development',
  },
  {
    title: 'Love in Designs',
    description: 'Branded this pitch perfect interior design company to perfection.',
    image: '/work/brand.jpg',
    href: '/work/brand',
  },
  {
    title: 'Album Art',
    description: 'Built a storytelling driven Album Art for A list Artiste.',
    image: '/work/graphic.jpg',
    href: '/work/graphic',
  },
]

export default function WorkPage() {
  return (
    <section className="bg-black text-white px-6 py-30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We Bring Ideas to Life</h1>
          <p className="text-gray-400 text-lg">
            A portfolio of transformative websites, applications, and identities we’ve built in close partnership with visionary clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } gap-10 items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
                <Link
                  href={project.href}
                  className="inline-block mt-4 text-green-400 hover:underline text-sm uppercase tracking-widest"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
