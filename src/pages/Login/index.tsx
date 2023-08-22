import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Flowise } from '~/models/auth'
import { initValues, loginValidate } from '~/common/validation/auth/config'
import InputForward from '~/components/Input'
import { useQueryLogin } from '~/hook/useLogin'
import { useAuth } from '~/hook/auth'
import browserStorage from 'store'

export default function Login() {
  const methods = useForm({
    mode: 'all',
    defaultValues: initValues,
    resolver: yupResolver(loginValidate)
  })
  const { signin } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    const user = browserStorage.get('user')
    if (user?.access_token) {
      signin && signin(user)
      navigate('/')
    }
  }, [navigate, signin])

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const { mutate: loginAction } = useQueryLogin()

  const onSubmit = async (userFormLogin: Flowise.UserFormLoginData): Promise<void> => {
    loginAction(userFormLogin)
  }

  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-xl'
        >
          <h1 className='text-center text-3xl font-semibold text-purple-700 underline'>Sign in</h1>
          <div className='mb-2'>
            <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
              Email
            </label>
            <InputForward
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
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
              className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
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
              type='submit'
              disabled={isSubmitting}
              className='w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none'
            >
              Login
            </button>
          </div>

          <p className='mt-8 text-center text-xs font-light text-gray-700'>
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
