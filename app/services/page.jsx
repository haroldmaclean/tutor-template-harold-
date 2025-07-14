export default function Services() {
  return (
    <div className='max-w-5xl mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800 text-center'>
        Services
      </h2>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-gray-700'>
        <div className='bg-white p-4 rounded shadow border'>
          📘 Mathematics Tutoring <br />
          <span className='text-sm text-gray-500'>Grade 8–12</span>
        </div>
        <div className='bg-white p-4 rounded shadow border'>
          🧪 Science & Physics Support <br />
          <span className='text-sm text-gray-500'>Theory & Practical</span>
        </div>
        <div className='bg-white p-4 rounded shadow border'>
          💻 Online Coding Lessons <br />
          <span className='text-sm text-gray-500'>HTML / CSS / JS</span>
        </div>
        <div className='bg-white p-4 rounded shadow border'>
          ✍️ Essay Editing <br />
          <span className='text-sm text-gray-500'>
            School / Academic / Freelance
          </span>
        </div>
      </div>
    </div>
  )
}
