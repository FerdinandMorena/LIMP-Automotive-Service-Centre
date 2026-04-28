'use client'

import { motion } from 'framer-motion'
import { MessageCircle, FileText, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car-service.jpg"
          alt="Professional car service at LIMP Automotive"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated light streaks */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200%', opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-1/4 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200%', opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, delay: 1 }}
          className="absolute top-1/2 h-px w-1/3 -rotate-6 bg-gradient-to-r from-transparent via-secondary to-transparent"
        />
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200%', opacity: [0, 0.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1.5, delay: 0.5 }}
          className="absolute top-3/4 h-px w-2/3 rotate-3 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Logo Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
        >
          <span className="font-mono text-sm font-semibold text-secondary">LIMP</span>
          <span className="text-sm text-muted-foreground">Automotive Service Centre</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">We Fix </span>
          <span className="gradient-text">Any Problem</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Quality Work. Reliable Service.{' '}
          <span className="text-secondary">Drive With Confidence.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#quote"
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <FileText className="h-5 w-5" />
            Get a Quote
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          <a
            href="https://wa.me/27679817605?text=Hi%20I'd%20like%20a%20quote%20for%20my%20car"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-[#128C7E] hover:shadow-lg hover:shadow-[#25D366]/25"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '5000+', label: 'Happy Customers' },
            { value: '100%', label: 'Satisfaction' },
            { value: '24h', label: 'Fast Turnaround' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-2xl font-bold text-secondary sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
