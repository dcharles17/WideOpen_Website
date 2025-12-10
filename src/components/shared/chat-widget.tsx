"use client"

import { useEffect } from "react"

export function ChatWidget() {
  useEffect(() => {
    // Tawk.to chat widget
    // To activate: Sign up at https://www.tawk.to/ and replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID
    const script = document.createElement("script")
    script.async = true
    script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID"
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    // Uncomment when you have your Tawk.to IDs:
    // document.body.appendChild(script)

    return () => {
      // Cleanup
      // if (document.body.contains(script)) {
      //   document.body.removeChild(script)
      // }
    }
  }, [])

  return null
}

// Alternative: Simple chat bubble that opens contact form
export function SimpleChatButton() {
  return (
    <a
      href="/contact"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group"
      aria-label="Contact us"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
    </a>
  )
}
