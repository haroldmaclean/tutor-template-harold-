'use client'

export default function ContactClient() {
  const handleClick = () => {
    window.open('https://wa.me/+27753316414', '_blank')
  }

  return (
    <div className='max-w-3xl mx-auto px-6 py-10'>
      <h2 className='text-3xl font-bold mb-4 text-gray-800'>Contact Me</h2>
      <p className='text-gray-600 mb-4'>
        You can reach me on WhatsApp or send an email:
      </p>
      <button
        onClick={handleClick}
        className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded shadow'
      >
        📞 Message me on WhatsApp
      </button>
      <p className='mt-4 text-gray-600'>📧 Email: harold@example.com</p>
    </div>
  )
}
