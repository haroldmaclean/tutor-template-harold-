export const metadata = {
  title: 'About - Tutor/Freelancer Template',
  description:
    'Learn more about Harold Mzumara, the creator of this tutor/freelancer website template.',
  keywords: ['about', 'tutor template', 'freelancer template', 'portfolio'],
}

export default function About() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-10'>
      <h2 className='text-3xl font-bold mb-4 text-gray-800 dark:text-white'>
        About Me
      </h2>
      <p className='text-gray-700 dark:text-gray-300'>
        Hi, I&apos;m Harold, a passionate tutor with over 5 years of experience
        helping students unlock their potential. I offer engaging, result-driven
        lessons designed to make learning enjoyable, whether it&apos;s in-person
        or online.
      </p>
    </div>
  )
}
