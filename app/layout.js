import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Tutor/Freelancer Website Template - Professional & Responsive',
  description:
    'A clean, responsive Next.js & Tailwind CSS template for tutors, freelancers, coaches, and consultants.',
  keywords: [
    'tutoring',
    'freelancer',
    'template',
    'next.js',
    'tailwindcss',
    'responsive',
    'portfolio',
  ],
  authors: [
    { name: 'Harold Mzumara', url: 'https://github.com/haroldmaclean' },
  ],
  openGraph: {
    title: 'Tutor/Freelancer Website Template',
    description:
      'A clean, responsive Next.js & Tailwind CSS template for tutors, freelancers, coaches, and consultants.',
    url: 'https://tutor-template-harold.vercel.app',
    siteName: 'Tutor Template by Harold',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tutor Template by Harold',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tutor/Freelancer Website Template',
    description:
      'A clean, responsive Next.js & Tailwind CSS template for tutors, freelancers, coaches, and consultants.',
    site: '@haroldmaclean',
    creator: '@haroldmaclean',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='min-h-screen'>{children}</main>

        {/* Floating WhatsApp Button */}
        <a
          href='https://wa.me/1234567890'
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105'
          aria-label='Chat on WhatsApp'
        >
          📱
        </a>

        <Footer />
      </body>
    </html>
  )
}
