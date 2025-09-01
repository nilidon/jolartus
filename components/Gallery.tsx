"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/1.jpg",
  },
  {
    src: "/2.jpg",
  },
  {
    src: "/3.jpg",
  },
  {
    src: "/4.jpg",
  },
  {
    src: "/5.jpg",
  },
  {
    src: "/6.jpg",
  },
  {
    src: "/7.jpg",
  },
  {
    src: "/8.jpg",
  },
  {
    src: "/9.jpg",
  },
  {
    src: "/10.jpg",
  },
  {
    src: "/11.jpg",
  },
  {
    src: "/12.jpg",
  },
  {
    src: "/13.jpg",
  },
  {
    src: "/14.jpg",
  },
  {
    src: "/15.jpg",
  },
  {
    src: "/16.jpg",
  },
  {
    src: "/17.jpg",
  },
  {
    src: "/18.jpg",
  },
  {
    src: "/19.jpg",
  },
  {
    src: "/20.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced stagger for smoother animation
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced movement for smoother animation
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Faster animation
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother feel
    },
  },
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 9)
  const initialImages = galleryImages.slice(0, 9)
  const additionalImages = galleryImages.slice(9)

  const openLightbox = (index: number) => {
    const actualIndex = showAll && index >= 9 ? index : index
    setSelectedImage(actualIndex)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink mb-4 gold-underline inline-block">
            Gallery
          </h2>
          <p className="text-stone text-lg">Recent projects captured in natural light</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Added margin for earlier trigger
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {initialImages.map((image, index) => (
            <motion.div
              key={`initial-${index}`}
              variants={itemVariants}
              className="group cursor-pointer will-change-transform" // Added will-change for GPU acceleration
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] aspect-[3/4]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  loading={index < 6 ? "eager" : "lazy"} // Eager load first 6 images
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  quality={85} // Optimized quality for better performance
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showAll && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
          >
            {additionalImages.map((image, index) => (
              <motion.div
                key={`additional-${index}`}
                variants={itemVariants}
                className="group cursor-pointer will-change-transform" // Added will-change for GPU acceleration
                onClick={() => openLightbox(index + 9)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] aspect-[3/4]">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={85} // Optimized quality for better performance
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!showAll && galleryImages.length > 9 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="bg-gold text-cream px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View More ({galleryImages.length - 9} more photos)
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage]?.src || "/placeholder.svg"}
                  alt=""
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />

                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={24} />
                </button>

                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

