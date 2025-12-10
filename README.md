# Wide Open Development Website

Modern, high-performance website for Wide Open Development - a full-service web development company based in Utah.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Geist Font** - Modern typography
- **next-themes** - Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ (you have v25.2.1 ✅)
- npm 9+ (you have v11.6.2 ✅)

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The server is currently running! 🎉

### Build

Create a production build:

```bash
npm run build
npm start
```

### Other Commands

```bash
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler
npm run format     # Format code with Prettier
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts & analytics
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Navigation header
│   │   ├── footer.tsx     # Footer
│   │   └── theme-toggle.tsx  # Dark mode toggle
│   └── shared/
│       └── theme-provider.tsx  # Theme provider
├── lib/
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # App constants
└── types/                 # TypeScript types
```

## Features Implemented ✅

### Phase 1: Foundation (COMPLETE)
- ✅ Next.js 15 with TypeScript
- ✅ Tailwind CSS with custom color scheme
- ✅ Header with navigation (desktop & mobile)
- ✅ Footer with contact info & links
- ✅ Dark mode toggle (fully working)
- ✅ Responsive design
- ✅ Vercel Analytics & Speed Insights
- ✅ Geist font integration

### Phase 2: Home Page (COMPLETE)
- ✅ Hero section with animated gradient background
- ✅ Services overview with 6 service cards
- ✅ Why Choose Us section (Bento grid layout)
- ✅ Process timeline with 5 steps
- ✅ Recent projects showcase
- ✅ Call-to-action section
- ✅ Framer Motion scroll animations
- ✅ Fully responsive across all sections

### Phase 3: Service Pages (COMPLETE)
- ✅ Services overview page
- ✅ Landing Pages service page (detailed features, ideal for)
- ✅ Business Websites service page (common pages, features)
- ✅ E-Commerce service page (platform options, features)
- ✅ Web Applications service page (examples, tech stack)
- ✅ Maintenance & Hosting page (pricing plans: $149, $299, $599/month)
- ✅ Reusable service page components
- ✅ All pages fully responsive with CTAs

### Phase 4: Contact & Forms (COMPLETE)
- ✅ Contact page with contact information display
- ✅ Quote request form with validation (React Hook Form + Zod)
- ✅ Real-time field validation
- ✅ API route for form submission
- ✅ Email templates (Resend + React Email)
- ✅ Auto-response to customers
- ✅ Success/error states with animations
- ✅ Works in development mode without API key

### Phase 5: Portfolio & About (COMPLETE)
- ✅ Portfolio grid page with category filtering
- ✅ Individual project detail pages (4 placeholder projects)
- ✅ About page with company story
- ✅ Team section (Dillon Charles profile)
- ✅ Company values and approach
- ✅ Custom 404 page with navigation
- ✅ All pages fully responsive

## Color Scheme

- **Primary**: Digital Lavender (#A78BFA)
- **Secondary**: Mocha Mousse (#A67B5B)
- **Accent**: Bright Coral (#FF6B6B)
- **Light Mode**: Cream background, Near Black text
- **Dark Mode**: Rich Black background, Soft White text

## Next Steps

### Phase 2: Home Page
- Build hero section with animated gradient
- Create services overview section
- Add "Why Choose Us" section
- Build process timeline
- Add portfolio preview
- Create CTA sections

### Phase 3: Service Pages
- Create services overview page
- Build individual service pages
- Add service data structure

### Phase 4: Contact & Forms
- Build contact page
- Create quote request form
- Set up email integration

### Phase 5: Portfolio & About
- Build portfolio grid
- Create project detail pages
- Build about page

## Contact Information

- **Phone**: (801) 834-7246
- **Email**: hello@wideopendevelopment.com
- **Location**: Utah, USA

## License

Private - All rights reserved.
