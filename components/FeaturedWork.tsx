import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Obazz Fc',
    category: 'Web Design',
    image: '/work/web.jpg',
    href: '/work/oceanic-airlines',
    span: 'col-span-2', // Big feature tile
  },
  {
    title: 'Love in Design',
    category: 'Branding',
    image: '/work/brand.jpg',
    href: '/work/nova-coffee',
  },
  {
    title: 'Album Art',
    category: 'Data / SaaS',
    image: '/work/graphic.jpg',
    href: '/work/insight-labs',
    
  },
  {
    title: 'Digital Marketing',
    category: 'E-Commerce / UX',
    image: '/work/brand.jpg',
    href: '/work/nova-coffee',
    span: 'col-span-2', // Big feature tile
  },
]

export default function FeaturedWork() {
  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-10">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className={`group relative block overflow-hidden rounded-xl ${project.span ?? ''}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-sm text-gray-300">{project.category}</p>
                <h3 className="text-2xl font-bold group-hover:text-green-400 transition">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
