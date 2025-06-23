// components/FeatureStories.tsx
import FeatureCard from './FeatureCard'

export default function FeatureStories() {
  return (
    <>
      <FeatureCard
        title="Pasco Machine"
        description="We need to innovate. What now? Our favorite question. We helped uncover the right digital strategies for success."
        cta="See how we helped →"
        image="/work/web.jpg"
      />
      <FeatureCard
        title="GoFundMe"
        description="Can you enhance our web presence? We uncovered bold solutions and delivered measurable results."
        cta="See what we designed →"
        image="/work/brand.jpg"
        reverse
      />
      <FeatureCard
        title="Blueprint Registry"
        description="How long will this take? We delivered results faster than expected, with clarity and impact."
        cta="Behind the scenes →"
        image="/work/graphic.jpg"
      />
    </>
  )
}
