"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already seen popup in this session
    const popupShown = sessionStorage.getItem("exitPopupShown")
    if (popupShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page (typical exit behavior)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }

    // Add event listener after 3 seconds (don't annoy immediate visitors)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleCTA = () => {
    setIsOpen(false)
    router.push("/contact")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-center mb-4 text-neutral-900 dark:text-neutral-100">
                Wait! Don&apos;t Leave Empty-Handed
              </h3>
              <p className="text-center text-neutral-600 dark:text-neutral-400 mb-6">
                Get a <strong>FREE website audit</strong> and discover how to increase your conversions by up to 300%
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="text-green-500 mt-1">✓</span>
                  Free performance analysis
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="text-green-500 mt-1">✓</span>
                  SEO recommendations
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="text-green-500 mt-1">✓</span>
                  No-obligation quote
                </li>
              </ul>

              {/* CTA */}
              <button
                onClick={handleCTA}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-all mb-3"
              >
                Claim My Free Audit
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
              >
                No thanks, I&apos;ll pass on this opportunity
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
