import Hero from '../components/Hero'
import AboutIntro from '../components/AboutIntro'
import TrustedBy from '@/components/TrustedBy'
import FeaturedWork from '../components/FeaturedWork'
//import FeatureStories from '../components/FeatureStories'
import Services from '@/components/Services'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <TrustedBy />
      <FeaturedWork />
      <Services />
      <CallToAction />
    </>
  )
}
