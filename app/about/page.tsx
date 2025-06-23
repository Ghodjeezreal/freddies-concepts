// app/about/page.tsx
'use client'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="bg-black text-white px-6 pt-24 pb-16">
      {/* Hero Title */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold uppercase leading-tight mb-4">
          Life at Freddies
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          As true partners to our clients, we solve problems, not tickets. Our developers,
          strategists, and designers are autonomous, outspoken, collaborative, and love
          doing the work. We&apos;ve kept our team small and flat on purpose: that&apos;s how we
          stay nimble, transparent, and human-centric. We are proudly headquartered in Lagos, Nigeria.
        </p>
      </section>

      {/* Leadership Grid */}
      <section>
        <h2 className="text-center text-sm uppercase tracking-widest mb-12">Freddies Leadership</h2>
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="space-y-4">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full object-cover rounded"
              />
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase">{member.role}</p>
                <h3 className="text-lg font-bold uppercase">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const team = [
  {
    name: 'ADAM BRAZG',
    role: 'CEO',
    image: '/team/adam.jpg',
    bio: `Adam is a co-founder of Freddies...`
  },
  {
    name: 'ROSS DZIKOVSKY',
    role: 'CTO',
    image: '/team/ross.jpg',
    bio: `Ross is a co-founder of Freddies...`
  },
  {
    name: 'EMMA THESENVITZ',
    role: 'Head of Creative',
    image: '/team/emma.jpg',
    bio: `Emma has been coaching teams...`
  },
  // Add more people similarly
]
