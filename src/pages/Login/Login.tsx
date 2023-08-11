// import { Link } from 'react-router-dom'

// export default function Login() {
//   return (
//     <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
//       <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
//         <h1 className='text-3xl font-semibold text-center text-purple-700 underline'>Sign in</h1>
//         <form className='mt-6'>
//           <div className='mb-2'>
//             <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
//               Email
//             </label>
//             <input
//               type='email'
//               className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
//             />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
//               Password
//             </label>
//             <input
//               type='password'
//               className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
//             />
//           </div>
//           <Link to='/foret-password' className='text-xs text-purple-600 hover:underline'>
//             Forget Password?
//           </Link>
//           <div className='mt-6'>
//             <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>
//               Login
//             </button>
//           </div>
//         </form>

//         <p className='mt-8 text-xs font-light text-center text-gray-700'>
//           {' '}
//           Don't have an account?{' '}
//           <Link to='/register' className='font-medium text-purple-600 hover:underline'>
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useQueryLogin } from '~/api/login';
import { UserFormLoginData } from '~/models/auth';
import { initValues, loginValidate } from '~/common/validation/auth/config';
import InputForward from '~/components/Input';

export default function Login() {
  const methods = useForm({ mode: 'all', defaultValues: initValues, resolver: yupResolver(loginValidate) });
  const { errors, isSubmitting } = methods.formState;
  const { register, handleSubmit } = methods;

  const { mutate: loginAction } = useQueryLogin();

  const onSubmit = async (userFormLogin: UserFormLoginData): Promise<void> => {
    loginAction(userFormLogin);
  };

  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
          <h1 className='text-3xl font-semibold text-center text-purple-700 underline'>Sign in</h1>
          <form className='mt-6'>
            <div className='mb-2'>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
                Email
              </label>
              <InputForward
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                {...register('email')}
                placeholder={'Email'}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                type='email'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
                Password
              </label>
              <InputForward
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                type='password'
                {...register('password')}
                error={!!errors?.password}
                helperText={errors?.password?.message}
                placeholder={'Password'}
              />
            </div>
            <Link to='/foret-password' className='text-xs text-purple-600 hover:underline'>
              Forget Password?
            </Link>
            <div className='mt-6'>
              <button 
                type="submit"
                disabled={isSubmitting}
                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'
              >
                Login
              </button>
            </div>
          </form>

          <p className='mt-8 text-xs font-light text-center text-gray-700'>
            {' '}
            Don't have an account?{' '}
            <Link to='/register' className='font-medium text-purple-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </form>
      </FormProvider>
    </div>
  )
}

