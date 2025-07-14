export const metadata = {
  title: 'Contact - Tutor/Freelancer Template',
  description:
    'Get in touch via WhatsApp, email, or location to book your tutoring or freelance session.',
  keywords: ['contact', 'whatsapp', 'email', 'booking'],
}

import ContactClient from '../components/ContactClient'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-10'>
      <ContactClient />
      <ContactForm />
    </div>
  )
}
