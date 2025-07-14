export const metadata = {
  title: 'Testimonials - Tutor/Freelancer Template',
  description:
    'Read what clients and students say about the tutoring and freelance services.',
  keywords: ['testimonials', 'reviews', 'client feedback', 'student feedback'],
}

export default function Testimonials() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-10'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center'>
        Testimonials
      </h2>
      <div className='space-y-6 text-gray-700 dark:text-gray-300'>
        <blockquote className='border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic'>
          &ldquo;Harold’s tutoring helped me improve my grades and feel
          confident in math again!&rdquo;
        </blockquote>
        <blockquote className='border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic'>
          &ldquo;Very professional, kind, and always explains concepts in an
          easy-to-understand way.&rdquo;
        </blockquote>
      </div>
    </div>
  )
}
