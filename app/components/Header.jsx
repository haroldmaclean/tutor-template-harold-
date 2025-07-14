export default function Header() {
  return (
    <header className='bg-white border-b shadow-sm'>
      <nav className='max-w-5xl mx-auto flex flex-wrap items-center justify-between px-4 py-4'>
        <div className='text-xl font-bold text-gray-800'>TutorTemplate</div>
        <div className='flex flex-wrap gap-4 text-sm font-medium text-gray-700 mt-2 sm:mt-0'>
          <a href='/' className='hover:text-blue-600'>
            Home
          </a>
          <a href='/about' className='hover:text-blue-600'>
            About
          </a>
          <a href='/services' className='hover:text-blue-600'>
            Services
          </a>
          <a href='/testimonials' className='hover:text-blue-600'>
            Testimonials
          </a>
          <a href='/contact' className='hover:text-blue-600'>
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
