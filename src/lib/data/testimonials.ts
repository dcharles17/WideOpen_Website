export interface Testimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "Mountain Peak Consulting",
    role: "CEO",
    content: "Wide Open Development transformed our online presence. Our new website is not only beautiful but has increased our lead generation by 300%. They truly understand modern web development.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    company: "UrbanFit Gym",
    role: "Owner",
    content: "Working with Dillon was a game-changer. The e-commerce platform they built handles our membership sales seamlessly. Response time and attention to detail were exceptional.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Artisan Bakery Co.",
    role: "Founder",
    content: "As a small business owner, I needed a website that could grow with me. Wide Open delivered a stunning site that's easy to update and has helped double our online orders.",
    rating: 5,
  },
  {
    name: "James Peterson",
    company: "TechStart Solutions",
    role: "Marketing Director",
    content: "The custom web application they developed for us has streamlined our entire workflow. Professional, on-time, and within budget. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    company: "Green Valley Real Estate",
    role: "Broker",
    content: "Our new website loads incredibly fast and looks amazing on all devices. We've seen a significant increase in property inquiries since launch. Outstanding work!",
    rating: 5,
  },
  {
    name: "David Thompson",
    company: "Summit Legal Group",
    role: "Managing Partner",
    content: "Wide Open Development created a professional, trustworthy online presence for our law firm. The maintenance package keeps everything running smoothly without us having to worry about it.",
    rating: 5,
  },
]
