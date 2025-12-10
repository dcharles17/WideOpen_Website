import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WOD
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Modern web development for businesses that want to stand out online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/landing-pages"
                  className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                >
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-websites"
                  className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                >
                  Business Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-applications"
                  className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                >
                  Web Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                >
                  <Phone className="h-4 w-4" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
                >
                  <Mail className="h-4 w-4" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPin className="h-4 w-4" />
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-neutral-600 hover:text-primary transition-colors dark:text-neutral-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
