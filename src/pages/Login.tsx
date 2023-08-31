import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Flowise } from '~/models/auth'
import { initValues, loginValidate } from '~/common/validation/auth/config'
import InputForward from '~/components/Input'
import { useQueryLogin } from '~/hook/useMutation'
import { isLoggedInState } from '~/recoil/atom/auth'
import { useRecoilValue } from 'recoil'
import { toast } from '~/recoil/atom'

export default function Login() {
  const stateToast = useRecoilValue(toast)
  const isLoggedIn = useRecoilValue(isLoggedInState)
  const methods = useForm({
    mode: 'all',
    defaultValues: initValues,
    resolver: yupResolver(loginValidate)
  })
  const navigate = useNavigate()
  const { mutate: loginAction } = useQueryLogin()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [navigate, isLoggedIn])

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const onSubmit = async (userFormLogin: Flowise.UserFormLoginData): Promise<void> => {
    loginAction(userFormLogin)
  }

  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='m-auto w-full rounded-xl bg-white p-10 shadow-md lg:max-w-[480px]'
        >
          <h1 className='text-center text-lg font-bold text-black'>サインイン</h1>
          {stateToast && (
            <p className='my-5 rounded-lg bg-[#FFD0D0] px-8 py-5 text-sm text-[#DE0000]'>
              {stateToast}
            </p>
          )}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm text-black'>
              メールアドレス
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              {...register('email')}
              placeholder={''}
              error={!!errors?.email}
              helperText={errors?.email?.message}
              type='email'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm text-black'>
              パスワード
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              type='password'
              {...register('password')}
              error={!!errors?.password}
              helperText={errors?.password?.message}
              placeholder={''}
            />
          </div>
          <Link to='/foret-password' className='text-sm text-dark underline'>
            パスワードを忘れた方
          </Link>
          <div className='my-7'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='m-auto block h-[48px] w-[300px] rounded-lg bg-black font-bold text-white'
            >
              ログイン
            </button>
          </div>

          <p className='text-center text-sm text-dark'>
            {' '}
            アカウントをお持ちではないですか？{' '}
            <Link to='/register' className='block pt-1 text-center text-sm text-dark underline'>
              アカウントを作成
            </Link>
          </p>
        </form>
      </FormProvider>
    </div>
  )
}
