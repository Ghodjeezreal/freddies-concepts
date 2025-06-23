// app/contact/page.tsx
'use client'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen py-65 px-4 flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left section: info/map */}
        <section className="flex flex-col gap-6 justify-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            READY TO <br /> INNOVATE?
          </h1>
          <div className="space-y-2 text-gray-300">
            <p>
              <a href="mailto:info@freddiesconcepts.com" className="underline">info@freddiesconcepts.com</a>
            </p>
            <p>+234 000 000 0000</p>
            <p>
              123 Main St, Suite 413<br />
              Lagos, NG
            </p>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            Provide us with some information on your vision and we’ll get back to you in a few hours, we promise.
          </p>

          {/* Google Map embed */}
          <div className="rounded overflow-hidden border border-white/10 mt-4">
            <iframe
              src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Trust logos/reviews */}
          <div className="flex items-center gap-4 mt-2">
            {/* Replace with your real review/trust logos if you wish */}
            <Image src="/google.png" alt="GOOGLE" width={60} height={20} />
            <span className="text-red-400 text-lg font-bold">★★★★★</span>
            <span className="text-xs text-gray-500">393 REVIEWS</span>
          </div>
        </section>

        {/* Right section: contact form */}
        <section>
          <form className="flex flex-col gap-5 border border-white/20 p-6 rounded">
            <input
              required
              placeholder="Name*"
              className="bg-black border border-white/40 rounded px-4 py-3 mb-2 text-white focus:outline-none focus:border-green-400 transition"
            />
            <input
              placeholder="Company*"
              className="bg-black border border-white/40 rounded px-4 py-3 mb-2 text-white focus:outline-none focus:border-green-400 transition"
            />
            <input
              required
              type="email"
              placeholder="Work Email Address*"
              className="bg-black border border-white/40 rounded px-4 py-3 mb-2 text-white focus:outline-none focus:border-green-400 transition"
            />
            <textarea
              required
              placeholder="Project Details*"
              className="bg-black border border-white/40 rounded px-4 py-3 min-h-[140px] text-white focus:outline-none focus:border-green-400 transition"
            />
            <button
              type="submit"
              className="ml-auto border border-white px-8 py-2 mt-4 hover:bg-green-400 hover:text-black transition rounded"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
