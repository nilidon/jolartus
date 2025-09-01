"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const visible = window.scrollY > window.innerHeight * 0.5
    if (visible !== isVisible) {
      setIsVisible(visible)
    }
  }, [isVisible])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
        >
          <Button
            onClick={scrollToContact}
            className="w-full bg-gold hover:bg-gold-hover text-white gold-glow shadow-lg py-4 text-base font-medium"
          >
            Get a Free Quote
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
