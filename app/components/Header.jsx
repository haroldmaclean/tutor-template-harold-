export default function Header() {
  return (
    <header className='bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm'>
      <nav className='max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 py-4'>
        {/* Logo / Brand */}
        <div className='text-2xl font-bold text-gray-800 dark:text-white tracking-tight'>
          Tutor<span className='text-blue-600'>Template</span>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-wrap gap-4 text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 sm:mt-0'>
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
