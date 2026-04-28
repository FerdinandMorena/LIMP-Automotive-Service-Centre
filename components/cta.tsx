'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, FileText } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
            Ready to Get Started?
          </span>

          {/* Headline */}
          <h2 className="mb-4 font-mono text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Get Your Vehicle </span>
            <span className="gradient-text">Back on the Road</span>
          </h2>

          {/* Subtext */}
          <p className="mb-6 text-xl text-muted-foreground">
            Safely & Reliably!
          </p>

          {/* Phone Number */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">Call Us Today</p>
            <a
              href="tel:+27679817605"
              className="font-mono text-4xl font-bold text-secondary transition-colors hover:text-secondary/80 sm:text-5xl"
            >
              067 981 7605
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+27679817605"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/27679817605?text=Hi%20I'd%20like%20a%20quote%20for%20my%20car"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-[#128C7E] hover:shadow-lg hover:shadow-[#25D366]/25 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <Link
              href="#quote"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-transparent px-8 py-4 font-semibold text-primary transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground sm:w-auto"
            >
              <FileText className="h-5 w-5" />
              Get Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
