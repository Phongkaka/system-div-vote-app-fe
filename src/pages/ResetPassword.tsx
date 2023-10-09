import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Flowise } from '~/models/auth'
import { initResetValues, resetValidate } from '~/common/validation/auth/config'
import InputForward from '~/components/Input'
import { useQueryResetPassword } from '~/hook/useMutation'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function ResetPassword() {
  const location = useLocation()
  const [token, setToken] = useState('')

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const tokenParam: any = queryParams.get('token')

    setToken(tokenParam)
  }, [location.search])
  const navigate = useNavigate()
  const methods = useForm({
    mode: 'all',
    defaultValues: initResetValues,
    resolver: yupResolver(resetValidate)
  })
  const { mutate: resetPasswordAction, isSuccess } = useQueryResetPassword()

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const onSubmit = async (userFormResetPassword: Flowise.IResetPasswordData): Promise<void> => {
    const paramWithToken = { ...userFormResetPassword, token }
    resetPasswordAction(paramWithToken)
  }

  if (isSuccess) {
    navigate('/login')
  }

  return (
    <div className='relative flex flex-col justify-center overflow-hidden p-2'>
      <Helmet>
        <title>パスワードを再設定する</title>
      </Helmet>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='m-auto w-full rounded-xl bg-white p-10 shadow-md lg:max-w-[480px]'
        >
          <h1 className='text-center text-lg font-bold text-black'>パスワード再設定</h1>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm text-black'>
              メールアドレス
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              type='email'
              {...register('email')}
              error={!!errors?.email}
              helperText={errors?.email?.message}
              placeholder={''}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='new_password' className='block text-sm text-black'>
              パスワード
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              type='password'
              {...register('new_password')}
              error={!!errors?.new_password}
              helperText={errors?.new_password?.message}
              placeholder={''}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password_confirmation'
              className='block text-sm font-semibold text-gray-800'
            >
              パスワード（確認用）
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              {...register('confirmPassword')}
              placeholder={''}
              error={!!errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
              type='password'
            />
          </div>
          <div className='my-7'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='m-auto block h-[48px] w-[300px] rounded-lg bg-black font-bold text-white'
            >
              パスワードを再設定する
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
