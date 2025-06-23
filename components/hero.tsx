'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 text-white bg-black overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/herofred.jpg" // Ensure this image is in the public/ folder
        alt="Hero background"
        fill
        className="object-cover absolute inset-0 z-0 opacity-80"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          We Create Meaningful Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          At Freddies Concepts, we help brands craft immersive websites and products
          that blend strategy, design, and technology.
        </p>

        <div className="mt-10 animate-bounce">
          <span className="inline-block text-gray-400 text-2xl">↓</span>
        </div>
      </motion.div>
    </section>
  )
}
