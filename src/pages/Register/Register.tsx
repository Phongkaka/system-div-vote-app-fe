import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
      <div className='m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-xl'>
        <h1 className='text-center text-3xl font-semibold text-purple-700 underline'>Register</h1>
        <form className='mt-6'>
          <div className='mb-2'>
            <label htmlFor='name' className='block text-sm font-semibold text-gray-800'>
              name
            </label>
            <input
              type='name'
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
              email
            </label>
            <input
              type='email'
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
              Password
            </label>
            <input
              type='password'
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='password_confirmation'
              className='block text-sm font-semibold text-gray-800'
            >
              Confirm Password
            </label>
            <input
              type='password_confirmation'
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
            />
          </div>
          <p>
            Already registered?{' '}
            <Link className="className='text-xs hover:underline' text-purple-600" to='/login'>
              Login
            </Link>
          </p>
          <div className='mt-6'>
            <button className='w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
