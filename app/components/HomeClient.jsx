'use client'

export default function HomeClient() {
  const handleClick = () => {
    window.open('https://wa.me/+27753316414', '_blank')
  }

  return (
    <div className='text-center px-6 py-10'>
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6'>
        Professional Tutoring for Future Success – Learn with Confidence
      </h1>

      <button
        onClick={handleClick}
        className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow transition'
      >
        📞 Book a Free Consultation on WhatsApp
      </button>

      <br />

      <a
        href='/tutor-template-harold.zip'
        download
        className='inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow'
      >
        ⬇️ Download Template
      </a>
    </div>
  )
}
