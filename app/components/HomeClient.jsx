'use client'

export default function HomeClient() {
  const handleClick = () => {
    alert('WhatsApp button clicked!')
  }

  return (
    <div className='text-center px-6 py-10'>
      <h1 className='text-gray-700 dark:text-gray-300'>
        Professional Tutoring for Future Success – Learn with Confidence
      </h1>
      <button
        onClick={handleClick}
        className='mt-4 bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition'
      >
        📞 Book a Free Consultation on WhatsApp
      </button>
    </div>
  )
}
