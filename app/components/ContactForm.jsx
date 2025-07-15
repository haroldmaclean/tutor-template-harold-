'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/xqalzwza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        alert('Something went wrong. Please try again later.')
      }
    } catch (error) {
      console.error('Form error:', error)
      alert('Submission failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 max-w-xl mx-auto mt-8'>
      <div>
        <label className='block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1'>
          Name
        </label>
        <input
          type='text'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
        />
        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
      </div>

      <div>
        <label className='block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1'>
          Email
        </label>
        <input
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
      </div>

      <div>
        <label className='block text-sm text-gray-700 dark:text-gray-300 font-medium mb-1'>
          Message
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className='w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100'
        />
        {errors.message && (
          <p className='text-red-500 text-sm'>{errors.message}</p>
        )}
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
