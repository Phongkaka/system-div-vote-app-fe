import { Link, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { initRegisterValues, registerValidate } from '~/common/validation/auth/config'
import { yupResolver } from '@hookform/resolvers/yup'
import InputForward from '~/components/Input'
import { useQueryRegister } from '~/hook/useMutation'

export default function Register() {
  const navigate = useNavigate()

  const methods = useForm({
    mode: 'all',
    defaultValues: initRegisterValues,
    resolver: yupResolver(registerValidate)
  })
  const { mutate: registerAction, isSuccess } = useQueryRegister()

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const onSubmit = async (userFormRegister: any): Promise<void> => {
    registerAction(userFormRegister)
  }

  if (isSuccess) {
    navigate('/login')
  }

  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
      <div className='m-auto w-full rounded-md bg-white p-6 shadow-md lg:max-w-xl'>
        <h1 className='text-center text-3xl font-semibold text-purple-700 underline'>Register</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
            <div className='mb-2'>
              <label htmlFor='name' className='block text-sm font-semibold text-gray-800'>
                name
              </label>
              <InputForward
                className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
                {...register('name')}
                placeholder={'Name'}
                error={!!errors?.name}
                helperText={errors?.name?.message}
                type='text'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
                email
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
              <label htmlFor='phone' className='block text-sm font-semibold text-gray-800'>
                phone
              </label>
              <InputForward
                className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
                {...register('phone')}
                placeholder={'phone'}
                error={!!errors?.phone}
                helperText={errors?.phone?.message}
                type='text'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
                Password
              </label>
              <InputForward
                className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
                {...register('password')}
                placeholder={'Password'}
                error={!!errors?.password}
                helperText={errors?.password?.message}
                type='password'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='password_confirmation'
                className='block text-sm font-semibold text-gray-800'
              >
                Confirm Password
              </label>
              <InputForward
                className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-purple-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40'
                {...register('confirmPassword')}
                placeholder={'Confirm password'}
                error={!!errors?.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                type='password'
              />
            </div>
            <p>
              Already registered?{' '}
              <Link className="className='text-xs hover:underline' text-purple-600" to='/login'>
                Login
              </Link>
            </p>
            <div className='mt-6'>
              <button
                disabled={isSubmitting}
                type='submit'
                className='w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none'
              >
                Register
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
