"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    title: "Venetian Plaster",
    description:
      "Luxurious, smooth finishes with depth and natural shine. Perfect for creating sophisticated interiors.",
    image: "/venetian-plaster-wall-finish-with-polished-marble-.png",
  },
  {
    title: "Stucco Finishes",
    description: "Durable and artistic wall treatments for both interior and exterior surfaces.",
    image: "/decorative-stucco-wall-with-rich-textured-finish.png",
  },
  {
    title: "Lime Wash",
    description:
      "Premium, eco-friendly lime wash finishes that add texture and a timeless European look to your walls.",
    image: "/satin-sheen-venetian-plaster-vanity-wall-in-warm-n.png",
  },
  {
    title: "Microcement Floors & Walls",
    description:
      "Sleek, seamless, and modern surfaces for floors and walls. Ideal for contemporary interiors with a clean, polished finish.",
    image: "/modern-microcement-wall-finish-with-smooth-seamles.png",
  },
  {
    title: "Custom Decorative Finishes",
    description: "Tailored designs to match your vision, from classic to contemporary styles.",
    image: "/custom-decorative-wall-finish-with-artistic-textur.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink mb-4 gold-underline inline-block">
            Our Services
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            At Jolart US, we specialize in high-quality decorative finishes that bring elegance and artistry to any
            space. Our services include:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full max-w-sm flex">
              <Card className="group bg-sand border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col w-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} finish example`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl font-medium text-ink mb-3">{service.title}</h3>
                  <p className="text-stone leading-relaxed flex-1">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
