// components/CallToAction.tsx
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-black text-white text-center px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let’s Work Together
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Whether you’re building something new or reinventing something existing  we’d love to help you create something meaningful.
      </p>
      <Link
        href="/contact"
        className="inline-block border border-white px-6 py-3 uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-black transition"
      >
        Contact Us
      </Link>
    </section>
  )
}
