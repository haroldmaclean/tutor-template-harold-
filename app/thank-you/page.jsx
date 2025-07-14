export const metadata = {
  title: 'Thank You - Tutor Template',
  description: 'Submission received – we will contact you soon!',
}

export default function ThankYou() {
  return (
    <div className='max-w-xl mx-auto px-6 py-20 text-center'>
      <h1 className='text-3xl font-bold text-green-600 mb-4'>Thank You! 🎉</h1>
      <p className='text-gray-700 dark:text-gray-300'>
        Your message has been received. I’ll get back to you as soon as
        possible.
      </p>
    </div>
  )
}
