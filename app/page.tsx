import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Gallery } from '@/components/gallery'
import { QuoteForm } from '@/components/quote-form'
import { Contact } from '@/components/contact'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MobileActionBar } from '@/components/mobile-action-bar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <QuoteForm />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </main>
  )
}
