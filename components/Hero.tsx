"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="plaster-bg min-h-[70vh] md:min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Reduced movement for smoother animation
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }} // Faster animation
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-ink leading-tight text-balance"
            >
              Transforming Walls into Art.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-sm uppercase tracking-widest text-stone font-medium"
            >
              Venetian Plaster • Stucco • Microcement
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gold hover:bg-gold-hover text-white gold-glow transition-all duration-300 px-8 py-4"
            >
              Get a Free Quote
            </Button>
            <Button
              onClick={() => scrollToSection("gallery")}
              variant="outline"
              size="lg"
              className="border-stone text-stone hover:bg-sand hover:border-ink hover:text-ink transition-all duration-300 px-8 py-4"
            >
              View Gallery
            </Button>
          </motion.div>

          {/* Trust indicators */}
          {/* Mobile: condensed single-line with gold separators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="sm:hidden text-[11px] text-stone"
          >
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <span>6+ years experience</span>
              <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full" />
              <span>Residential & Commercial</span>
              <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full" />
              <span>NYC & Tri-State</span>
            </div>
          </motion.div>

          {/* Desktop/Tablet: detailed badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="hidden sm:flex flex-wrap gap-6 text-sm text-stone"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>6+ years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>Residential & Commercial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>NYC & Tri-State</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} // Reduced movement for smoother animation
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }} // Faster animation
          className="relative will-change-transform mt-8 md:mt-0" // Visible on mobile with spacing
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mx-auto w-full max-w-sm sm:max-w-md md:max-w-none">
            <Image
              src="/hero-venetian-plaster.png"
              alt="Elegant polished Venetian plaster wall with warm neutral tones"
              fill
              className="object-cover"
              priority
              quality={90} // High quality for hero image
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 shadow-inner" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

