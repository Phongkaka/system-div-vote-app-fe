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
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='m-auto w-full rounded-xl bg-slate-50 p-10 shadow-md lg:max-w-[480px]'
        >
          <h1 className='text-center text-lg font-bold text-black'>サインイン</h1>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-semibold text-gray-800'>
              名前
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              {...register('name')}
              placeholder={''}
              error={!!errors?.name}
              helperText={errors?.name?.message}
              type='text'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phone' className='block text-sm font-semibold text-gray-800'>
              電話
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              {...register('phone')}
              placeholder={''}
              error={!!errors?.phone}
              helperText={errors?.phone?.message}
              type='text'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-semibold text-gray-800'>
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
            <label htmlFor='password' className='block text-sm font-semibold text-gray-800'>
              パスワード
            </label>
            <InputForward
              className='mt-2 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
              {...register('password')}
              placeholder={''}
              error={!!errors?.password}
              helperText={errors?.password?.message}
              type='password'
            />
            <span className='text-xs text-dark'>※半角○文字以上</span>
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
              登録する
            </button>
          </div>

          <p className='text-center text-sm text-dark'>
            {' '}
            アカウントをお持ちですか？{' '}
            <Link to='/login' className='block pt-1 text-center text-sm text-dark underline'>
              ログイン
            </Link>
          </p>
        </form>
      </FormProvider>
    </div>
  )
}
