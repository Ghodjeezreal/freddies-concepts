'use client'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-gray-400 px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Right side: Socials with glow */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_6px_#40bd2d] transition-all duration-300"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_6px_#60a5fa] transition-all duration-300"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com/freddieconcepts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_6px_#f472b6] transition-all duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:drop-shadow-[0_0_6px_#0ea5e9] transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
        </div>
        {/* Middle: Navigation Links */}
        <div className="flex gap-6">
          <Link href="/work" className="hover:text-white transition">Work</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
        {/* Left side: Name or logo */}
        <div className="text-center md:text-left">
          <span className="font-semibold text-black dark:text-white">© {new Date().getFullYear()} Freddies Concepts</span>
        </div>
      </div>
    </footer>
  )
}
