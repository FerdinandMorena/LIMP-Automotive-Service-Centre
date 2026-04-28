'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Upload, X, MessageCircle } from 'lucide-react'

const serviceOptions = [
  'Clutch Repair',
  'Minor Service',
  'Major Service',
  'Brake Pads',
  'Starters',
  'Shocks',
  'Engine Overhaul',
  'Diesel Service',
  'Other',
]

interface FormData {
  fullName: string
  phone: string
  email: string
  vehicleMakeModel: string
  service: string
  message: string
  file: File | null
}

interface FormErrors {
  fullName?: string
  phone?: string
  vehicleMakeModel?: string
  service?: string
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    service: '',
    message: '',
    file: null,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.vehicleMakeModel.trim()) {
      newErrors.vehicleMakeModel = 'Vehicle make and model is required'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        vehicleMakeModel: '',
        service: '',
        message: '',
        file: null,
      })
    }, 5000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, file }))
  }

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, file: null }))
  }

  return (
    <section id="quote" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
              Get a Quote
            </span>
            <h2 className="mb-6 font-mono text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="text-foreground">Request a </span>
              <span className="gradient-text">Free Quote</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Fill out the form and we&apos;ll get back to you with a detailed quote within 24
              hours. No obligation, no pressure.
            </p>

            {/* Quick Contact */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
                <p className="mb-2 text-sm text-muted-foreground">Need a faster response?</p>
                <a
                  href="https://wa.me/27679817605?text=Hi%20I'd%20like%20a%20quote%20for%20my%20car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-medium text-white transition-colors hover:bg-[#128C7E]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
                <p className="mb-1 text-sm text-muted-foreground">Or call us directly:</p>
                <a
                  href="tel:+27679817605"
                  className="font-mono text-2xl font-bold text-secondary transition-colors hover:text-secondary/80"
                >
                  067 981 7605
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="mb-4 rounded-full bg-green-500/20 p-4"
                  >
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                  </motion.div>
                  <h3 className="mb-2 font-mono text-2xl font-bold text-foreground">
                    Quote Request Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you within 24 hours with a detailed quote.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm sm:p-8"
                >
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className={`w-full rounded-xl border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.fullName ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className={`w-full rounded-xl border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.phone ? 'border-destructive' : 'border-border'
                        }`}
                        placeholder="067 123 4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Vehicle & Service */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="vehicleMakeModel" className="mb-2 block text-sm font-medium">
                        Vehicle Make & Model <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="vehicleMakeModel"
                        value={formData.vehicleMakeModel}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, vehicleMakeModel: e.target.value }))
                        }
                        className={`w-full rounded-xl border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.vehicleMakeModel ? 'border-destructive' : 'border-border'
                        }`}
                        placeholder="BMW 320i 2020"
                      />
                      {errors.vehicleMakeModel && (
                        <p className="mt-1 text-sm text-destructive">{errors.vehicleMakeModel}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium">
                        Service Needed <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                        className={`w-full rounded-xl border bg-input px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          errors.service ? 'border-destructive' : 'border-border'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-destructive">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message / Problem Description
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Describe your vehicle's problem or the service you need..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Attach Photos <span className="text-muted-foreground">(optional)</span>
                    </label>
                    {formData.file ? (
                      <div className="flex items-center justify-between rounded-xl border border-border bg-input px-4 py-3">
                        <span className="truncate text-sm text-muted-foreground">
                          {formData.file.name}
                        </span>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="ml-2 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-input px-4 py-6 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                        <Upload className="h-5 w-5" />
                        <span className="text-sm">Click to upload photos</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Request Quote
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
