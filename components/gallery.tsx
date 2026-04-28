'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop',
    alt: 'Mechanic working on engine',
    title: 'Expert Repairs',
  },
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop',
    alt: 'Engine close-up',
    title: 'Engine Work',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
    alt: 'Brake system',
    title: 'Brake Systems',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=600&auto=format&fit=crop',
    alt: 'Car diagnostics',
    title: 'Diagnostics',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
    alt: 'Sports car',
    title: 'All Vehicles',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop',
    alt: 'Car service',
    title: 'Full Service',
  },
]

export function Gallery() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Our Work
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Quality </span>
            <span className="gradient-text">Craftsmanship</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Take a look at our workshop and the quality of work we deliver to our customers every
            day.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="font-mono text-lg font-semibold text-foreground">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.alt}</p>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 transition-colors duration-300 group-hover:border-primary/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
