// app/page.jsx

export const metadata = {
  title: 'Home - Tutor/Freelancer Template',
  description:
    'Professional tutoring and freelance services template built with Next.js and Tailwind CSS.',
}

import HomeClient from './components/HomeClient'

export default function HomePage() {
  return <HomeClient />
}
