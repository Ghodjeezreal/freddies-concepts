'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDesktopServices, setShowDesktopServices] = useState(false)
  const [showMobileServices, setShowMobileServices] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDesktopServices(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black/70 backdrop-blur text-white border-b border-white/10 transition duration-300">
      <div className="max-w-7xl mx-auto px-1 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {scrolled ? (
            <span className="text-xl font-light tracking-wider font-serif">Freddies Concepts</span>
          ) : (
            <Image
              src="/logofreddies.png"
              alt="Freddies Logo"
              width={64}
              height={64}
              className="object-contain contrast -50"
            />
          )}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            {navLinks.map((link) =>
              link.name === 'Services' ? (
                <div key={link.name} ref={dropdownRef}>
                  <button
                    onClick={() => setShowDesktopServices((prev) => !prev)}
                    className="hover:text-green-400 transition cursor-pointer"
                  >
                    SERVICES
                  </button>
                </div>
              ) : (
                <Link key={link.name} href={link.href} className="hover:text-green-400 transition">
                  {link.name}
                </Link>
              )
            )}
          </nav>
          <button onClick={() => setIsOpen(true)} className="md:hidden space-y-1 cursor-pointer">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
          <ThemeToggle />
        </div>
      </div>
      {/* Desktop Services Dropdown */}
      <AnimatePresence>
        {showDesktopServices && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-full bg-black border-t border-white/10 z-40"
          >
            <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[{
                title: 'Digital Transformation',
                desc: 'We partner with CTOs and CIOs to co-create and execute long-term digital strategies that increase sales, brand awareness, and operational efficiency.',
                href: '/services/digital-transformation'
              }, {
                title: 'Headless Commerce Development',
                desc: 'We build high converting, fast-loading, headless eCommerce websites for enterprise brands, that accelerate growth.',
                href: '/services/headless-commerce'
              }, {
                title: 'Custom Software Development',
                desc: 'We work with startups and global enterprises to design and develop custom web & mobile apps that drive their business forward.',
                href: '/services/software-development'
              }, {
                title: 'Website Design & Development',
                desc: 'We design and develop beautiful websites that deliver best-in-class experiences to your users.',
                href: '/services/web-design'
              }].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group block"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-green-400 mb-2 transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 w-full max-w-xs h-full bg-black text-white p-10 pt-16 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => {
            setIsOpen(false)
            setShowMobileServices(false)
          }}
          className="absolute top-4 right-4 text-3xl font-bold cursor-pointer"
          aria-label="Close menu"
        >
          ×
        </button>
        <nav className="flex flex-col gap-6 text-xl">
          {navLinks.map((link) =>
            link.name === 'Services' ? (
              <div key={link.name} className="space-y-2">
                <button
                  onClick={() => setShowMobileServices((prev) => !prev)}
                  className="text-left w-full flex justify-between items-center hover:text-green-400 transition cursor-pointer"
                >
                  <span>Services</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      showMobileServices ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {showMobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 text-base text-gray-400"
                    >
                      <Link href="/services/digital-transformation" className="hover:text-green-400 transition">
                        Digital Transformation
                      </Link>
                      <Link href="/services/headless-commerce" className="hover:text-green-400 transition">
                        Headless Commerce
                      </Link>
                      <Link href="/services/software-development" className="hover:text-green-400 transition">
                        Software Development
                      </Link>
                      <Link href="/services/web-design" className="hover:text-green-400 transition">
                        Web Design
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-green-400 transition"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
