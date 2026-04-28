'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Users, Package, Banknote, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Skilled & Experienced Technicians',
    description: 'Our certified mechanics bring years of expertise to every job.',
  },
  {
    icon: Package,
    title: 'Quality Parts & Lubricants',
    description: 'We only use premium quality parts and branded lubricants.',
  },
  {
    icon: Banknote,
    title: 'Honest & Transparent Pricing',
    description: 'No hidden fees. Get upfront quotes before any work begins.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround Time',
    description: 'Get back on the road quickly with our efficient service.',
  },
  {
    icon: Award,
    title: 'Customer Satisfaction Guaranteed',
    description: 'Your satisfaction is our priority. We stand behind our work.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-secondary/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
              Why Choose Us
            </span>
            <h2 className="mb-6 font-mono text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="text-foreground">Your Car </span>
              <span className="gradient-text">Deserves The Best</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              At LIMP Automotive Service Centre, we combine expertise with genuine care for your
              vehicle. Our commitment to excellence ensures your car receives the best treatment
              every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '98%', label: 'Customer Rating' },
                { value: '50+', label: 'Services Offered' },
                { value: '1 Day', label: 'Average Service' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm"
                >
                  <div className="font-mono text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex gap-4 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <reason.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
