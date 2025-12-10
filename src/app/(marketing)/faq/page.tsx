import type { Metadata } from "next"
import { FAQSection } from "@/components/faq/faq-section"

export const metadata: Metadata = {
  title: "FAQ | Wide Open Development",
  description: "Frequently asked questions about our web development services, pricing, timeline, and process. Get answers to common questions about building your website.",
}

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Website costs vary based on complexity and features. Landing pages start around $1,500, business websites range from $3,000-$12,000, and e-commerce sites begin at $5,000. We provide custom quotes for every project to ensure you get exactly what you need within your budget. Contact us for a free, no-obligation quote.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timeline depends on project scope. A landing page typically takes 1-2 weeks, a standard business website takes 3-6 weeks, and complex e-commerce or web applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process.",
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes! We offer three maintenance tiers: Essential ($149/month), Professional ($299/month), and Enterprise ($599/month). All plans include security updates, backups, uptime monitoring, and technical support. Visit our maintenance page for full details on what's included in each tier.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built mobile-first and fully responsive, meaning they look and work beautifully on all devices - phones, tablets, and desktops. With over 60% of web traffic coming from mobile devices, this isn't optional - it's essential.",
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes! We build websites with user-friendly content management systems (CMS) so you can easily update text, images, and content without coding knowledge. We also provide training and documentation to help you manage your site confidently.",
  },
  {
    question: "Do you help with SEO?",
    answer: "Yes, all our websites are built with SEO best practices from the ground up - including fast loading speeds, mobile optimization, clean code, proper meta tags, and structured data. We also offer ongoing SEO services to help you rank higher in search results and drive more organic traffic.",
  },
  {
    question: "What if I need changes after the website is live?",
    answer: "We offer ongoing support and maintenance packages for post-launch updates. Minor tweaks are often included in maintenance plans, while larger changes can be quoted separately. We're always here to help your website evolve with your business.",
  },
  {
    question: "Do I own the website after it's built?",
    answer: "Yes! Once the project is complete and paid for, you own 100% of the website code, content, and design. We'll provide all source files and help you maintain full control of your digital presence.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, cutting-edge technologies including Next.js, React, TypeScript, and Tailwind CSS for optimal performance and maintainability. Our tech stack is chosen to ensure your website is fast, secure, and easy to update for years to come.",
  },
  {
    question: "Do you work with clients outside of Utah?",
    answer: "Yes! While we're based in Utah, we serve businesses nationwide. Our streamlined remote process includes video calls, screen sharing, and project management tools to ensure seamless communication regardless of location.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've worked with businesses across many industries including professional services, retail, healthcare, real estate, restaurants, fitness, and more. Our approach is customized to your specific industry needs and target audience.",
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, hosting is included in our maintenance packages. We use enterprise-grade hosting with 99.9% uptime guarantees, automatic backups, and top-tier security. Alternatively, we can deploy to your preferred hosting provider.",
  },
  {
    question: "What's your payment structure?",
    answer: "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments. We accept credit cards, ACH transfers, and other payment methods for your convenience.",
  },
  {
    question: "What happens if I'm not happy with the design?",
    answer: "We include multiple rounds of revisions in our process to ensure you're thrilled with the final product. We'll work closely with you during the design phase, incorporating your feedback until we get it right. Your satisfaction is our top priority.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our quote form or call us at (801) 834-7246. We'll schedule a free consultation to discuss your project, goals, and budget. Then we'll provide a detailed proposal and timeline. No obligation - just honest advice and clear pricing.",
  },
]

export default function FAQPage() {
  // Generate FAQ schema for voice search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Frequently Asked Questions
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400">
              Everything you need to know about working with us
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent">
            <h2 className="text-fluid-3xl font-bold mb-4 text-white">
              Still Have Questions?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              We're here to help! Contact us for a free consultation and we'll answer all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
              >
                Get Your Free Quote
              </a>
              <a
                href="tel:+18018347246"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Call (801) 834-7246
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
