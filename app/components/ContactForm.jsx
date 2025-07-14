'use client'

export default function ContactForm() {
  return (
    <form
      action='https://formspree.io/f/xqalzwza' // 👈 Replace with your real Formspree ID
      method='POST'
      className='space-y-4 max-w-xl mx-auto mt-8'
    >
      {/* Redirect after submit */}
      <input
        type='hidden'
        name='_next'
        value='https://tutor-template-harold.vercel.app/thank-you'
      />

      <div>
        <label className='block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1'>
          Name
        </label>
        <input
          type='text'
          name='name'
          required
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
        />
      </div>

      <div>
        <label className='block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1'>
          Email
        </label>
        <input
          type='email'
          name='email'
          required
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
        />
      </div>

      <div>
        <label className='block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1'>
          Message
        </label>
        <textarea
          name='message'
          rows={4}
          required
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
        />
      </div>

      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow'
      >
        Send Message
      </button>
    </form>
  )
}
