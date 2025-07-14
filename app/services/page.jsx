export const metadata = {
  title: 'Services - Tutor/Freelancer Template',
  description:
    'Explore the tutoring and freelance services offered, including math, science, coding, and more.',
  keywords: ['services', 'tutoring', 'freelance services', 'online lessons'],
}

export default function Services() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center'>
        Services
      </h2>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-gray-800 dark:text-gray-100'>
        <div className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 rounded shadow'>
          📘 Mathematics Tutoring <br />
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            Grade 8–12
          </span>
        </div>
        <div className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 rounded shadow'>
          🧪 Science & Physics Support <br />
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            Theory & Practical
          </span>
        </div>
        <div className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 rounded shadow'>
          💻 Online Coding Lessons <br />
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            HTML / CSS / JS
          </span>
        </div>
        <div className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 rounded shadow'>
          ✍️ Essay Editing <br />
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            School / Academic / Freelance
          </span>
        </div>
      </div>
    </div>
  )
}
