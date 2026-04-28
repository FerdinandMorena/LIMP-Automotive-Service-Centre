'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
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
            Contact Us
          </span>
          <h2 className="mb-4 font-mono text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Find </span>
            <span className="gradient-text">Us Here</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Visit our workshop or get in touch. We&apos;re always ready to help with your
            automotive needs.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Business Hours */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">08:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-destructive">Closed</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-secondary/10 p-3 text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-semibold">Our Location</h3>
              </div>
              <p className="text-muted-foreground">
                Unit 2, No. 4 Industria Street
                <br />
                Industria, Polokwane
                <br />
                0699
              </p>
              <a
                href="https://maps.google.com/?q=Unit+2,+No.+4+Industria+Street,+Industria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Get Directions
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Contact Details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+27679817605"
                className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50"
              >
                <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-mono text-lg font-semibold text-foreground">067 981 7605</p>
              </a>

              <a
                href="mailto:info@limpautomotive.co.za"
                className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50"
              >
                <div className="mb-3 inline-flex rounded-xl bg-secondary/10 p-3 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">Email Us</p>
                <p className="text-sm font-semibold text-foreground">info@limpautomotive.co.za</p>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] overflow-hidden rounded-2xl border border-border/50 lg:h-full"
          >
            <iframe
              src="https://www.google.com/maps?q=4+Industria+St,+Polokwane+Ext+68,+Polokwane,+0699,+South+Africa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
