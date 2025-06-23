'use client'
import Services from './Services'
import { usePathname } from 'next/navigation'

export default function ShowServices() {
  const pathname = usePathname()
  if (pathname === '/contact') return null
  return <Services />
}