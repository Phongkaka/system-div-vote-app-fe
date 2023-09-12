import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Flowise } from '~/models/auth'
import { initForgotValues, forgotValidate } from '~/common/validation/auth/config'
import InputForward from '~/components/Input'
import { useQueryForgotPassword } from '~/hook/useMutation'

export default function ForgotPassword() {
  const methods = useForm({
    mode: 'all',
    defaultValues: initForgotValues,
    resolver: yupResolver(forgotValidate)
  })

  const { mutate: forgotPasswordAction } = useQueryForgotPassword()

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const onSubmit = async (userFormForGotPassWord: Flowise.IForGotPassWordData): Promise<void> => {
    forgotPasswordAction(userFormForGotPassWord)
  }
  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden'>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='m-auto w-full rounded-xl bg-white p-10 shadow-md lg:max-w-[480px]'
        >
          <h1 className='text-center text-lg font-bold text-black'>パスワードをお忘れですか？</h1>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm text-black'>
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
          <div className='my-7'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='m-auto block h-[48px] w-[300px] rounded-lg bg-black font-bold text-white'
            >
              あなたのパスワードをリセット
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
