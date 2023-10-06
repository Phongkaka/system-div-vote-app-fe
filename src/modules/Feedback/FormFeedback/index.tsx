import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { feedbackValidate, initFeedbackValues } from '~/common/validation/feedback/config'
import InputForward from '~/components/Input'
import TextAreaForward from '~/components/TextArea'
import { useQueryFeedback } from '~/hook/useMutation'
import { FeedbackFormData } from '~/models/feedbackFAQ'

interface FormFeedbackProps {
  className?: string
}

const FormFeedback = ({ className }: FormFeedbackProps) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: initFeedbackValues,
    resolver: yupResolver(feedbackValidate)
  })

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const { mutate: feedbackAction } = useQueryFeedback()

  const onSubmit = async (data: FeedbackFormData): Promise<void> => {
    feedbackAction(data)
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
          <div className='mb-6 items-center justify-between lg:flex'>
            <label htmlFor='title' className='mb-4 block text-base font-bold lg:mb-0 lg:w-[30%]'>
              題名 <span className='require-input'>必須</span>
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('title')}
                error={!!errors?.title}
                helperText={errors?.title?.message}
                type='title'
                className='input-style-feedback border-none'
              />
            </div>
          </div>
          <div className='mb-6 items-center justify-between lg:flex'>
            <label htmlFor='name' className='mb-4 block text-base font-bold lg:mb-0  lg:w-[30%]'>
              お名前<span className='require-input'>必須</span>
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('name')}
                error={!!errors?.name}
                helperText={errors?.name?.message}
                type='name'
                className='input-style-feedback border-none'
              />
            </div>
          </div>
          <div className='mb-6 items-center justify-between lg:flex'>
            <label htmlFor='email' className='mb-4 block text-base font-bold lg:mb-0 lg:w-[30%]'>
              メールアドレス<span className='require-input'>必須</span>
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('email')}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                type='email'
                className='input-style-feedback border-none'
              />
            </div>
          </div>
          <div className='mb-6 items-center justify-between lg:flex'>
            <label
              htmlFor='phone_number'
              className='mb-4 block text-base font-bold lg:mb-0 lg:w-[30%]'
            >
              電話番号<span className='require-input'>必須</span>
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('phone_number')}
                error={!!errors?.phone_number}
                helperText={errors?.phone_number?.message}
                className='input-style-feedback border-none'
              />
            </div>
          </div>
          <div className='mb-6 justify-between lg:flex'>
            <label
              htmlFor='message'
              className='mb-4 mt-5 block text-base font-bold lg:mb-0 lg:w-[30%]'
            >
              メッセージ本文
            </label>
            <div className='flex-grow'>
              <TextAreaForward
                {...register('content')}
                className='input-style-feedback h-32 border-none'
              />
            </div>
          </div>
          <div className='mb-6 mt-5 flex items-center justify-center lg:justify-start'>
            <div className='text-base lg:w-[30%]'></div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full rounded-lg bg-black px-2 py-2 text-center text-white lg:w-[40%]'
            >
              送信する
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default FormFeedback
