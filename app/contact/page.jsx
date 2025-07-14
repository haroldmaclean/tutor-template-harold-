// app/contact/page.jsx

export const metadata = {
  title: 'Contact - Tutor/Freelancer Template',
  description:
    'Get in touch via WhatsApp, email, or location to book your tutoring or freelance session.',
  keywords: ['contact', 'whatsapp', 'email', 'booking'],
}

import ContactClient from '../components/ContactClient'

export default function Contact() {
  return <ContactClient />
}
