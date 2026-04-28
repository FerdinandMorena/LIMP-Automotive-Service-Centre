'use client'

import { motion } from 'framer-motion'
import {
  Cog,
  Wrench,
  Settings,
  Disc,
  Zap,
  CircleDot,
  Gauge,
  Fuel,
} from 'lucide-react'

const services = [
  {
    icon: Cog,
    title: 'Clutches',
    description: 'Expert clutch replacement and repairs for smooth gear transitions.',
  },
  {
    icon: Wrench,
    title: 'Minor Services',
    description: 'Routine maintenance to keep your vehicle running smoothly.',
  },
  {
    icon: Settings,
    title: 'Major Services',
    description: 'Full engine diagnostics and complete overhaul services.',
  },
  {
    icon: Disc,
    title: 'Brake Pads',
    description: 'Brake inspections and premium quality brake pad replacements.',
  },
  {
    icon: Zap,
    title: 'Starters',
    description: 'Starter motor testing and professional replacements.',
  },
  {
    icon: CircleDot,
    title: 'Shocks',
    description: 'Suspension checks and shock absorber replacement services.',
  },
  {
    icon: Gauge,
    title: 'Engine Overhaul',
    description: 'Complete engine rebuilding for top performance.',
  },
  {
    icon: Fuel,
    title: 'Diesel & Petrol',
    description: 'We service all makes and models of diesel and petrol vehicles.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Services() {
  return (
    <section id="services" className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

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
            Our Services
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Expert </span>
            <span className="gradient-text">Automotive Care</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From routine maintenance to complex repairs, our skilled technicians handle it all with
            precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mb-2 font-mono text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
