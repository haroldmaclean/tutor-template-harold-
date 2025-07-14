import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Tutor/Freelancer Template',
  description: 'Professional tutoring and freelance services template',
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
