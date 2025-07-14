'use client'

export default function Home() {
  return (
    <section className='max-w-4xl mx-auto px-4 py-10 text-center'>
      <h1 className='text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight'>
        Professional Tutoring for Future Success – Learn with Confidence
      </h1>
      <p className='text-lg text-gray-600 mb-8'>
        Get personalized support in Math, Science, and Coding — right from your
        home.
      </p>
      <button
        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        className='bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md text-lg font-medium shadow'
      >
        📞 Book a Free Consultation on WhatsApp
      </button>
    </section>
  )
}
