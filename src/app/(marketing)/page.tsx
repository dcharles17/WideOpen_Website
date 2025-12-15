import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ProcessSection } from "@/components/home/process-section"
import { RecentProjects } from "@/components/home/recent-projects"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      {/* <RecentProjects /> */}
      {/* <Testimonials /> */}
      <CTASection />
    </main>
  )
}
