import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { StructuredData } from "@/components/shared/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: "Wide Open Development | Modern Web Development in Utah",
  description: "Full-service web development company based in Utah, serving businesses nationwide. We build modern, high-performance websites, e-commerce platforms, and web applications.",
  keywords: ["web development", "Utah", "website design", "e-commerce", "web applications", "custom websites"],
  authors: [{ name: "Wide Open Development" }],
  openGraph: {
    title: "Wide Open Development | Modern Web Development in Utah",
    description: "Full-service web development company based in Utah, serving businesses nationwide.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://wideopendevelopment.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
