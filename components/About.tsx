"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Plaster texture background */}
      <div className="absolute inset-0 opacity-30 plaster-texture" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-ink mb-8 text-balance">About Jolart US</h2>

          <div className="space-y-6 text-lg leading-relaxed text-stone">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Jolart US is a New York-based Venetian plaster and decorative finishes company, specializing in
              transforming ordinary walls into extraordinary works of art. With over 6 years of experience in Venetian
              plaster, stucco, and lime wash, we combine traditional European techniques with modern design to create
              elegant, durable, and artistic finishes for homes and businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              At Jolart US, we believe every wall has the potential to become a masterpiece. Our mission is to bring
              artistry, sophistication, and a touch of European atelier flair to every project we undertake.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-xl font-medium text-ink"
            >
              Whether you're looking to elevate your interior design or add a luxurious finish to your space, we're here
              to help. Explore our gallery and contact us to start transforming your walls into art.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-lg font-medium text-gold border-t border-sand pt-6 mt-8"
            >
              Serving all of New York City, Westchester County, Connecticut & New Jersey - Hamptons.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
