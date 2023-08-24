import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { feedbackValidate, initFeedbackValues } from '~/common/validation/feedback/config'
import InputForward from '~/components/Input'
import TextAreaForward from '~/components/TextArea'
import { useQueryFeedback } from '~/hook/useFeedback'
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
    <div className='lg:px-[20%]'>
      <h2 className='mb-5 text-center text-2xl font-semibold'>コンタクト</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
          <div className='mb-2 items-center justify-between lg:flex'>
            <label htmlFor='title' className='block text-base lg:w-[30%]'>
              題名（必須）
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('title')}
                error={!!errors?.title}
                helperText={errors?.title?.message}
                type='title'
                className='input-style-feedback'
              />
            </div>
          </div>
          <div className='mb-2 items-center justify-between lg:flex'>
            <label htmlFor='name' className='block text-base lg:w-[30%]'>
              お名前（必須）
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('name')}
                error={!!errors?.name}
                helperText={errors?.name?.message}
                type='name'
                className='input-style-feedback'
              />
            </div>
          </div>
          <div className='mb-2 items-center justify-between lg:flex'>
            <label htmlFor='email' className='block text-base lg:w-[30%]'>
              email
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('email')}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                type='email'
                className='input-style-feedback'
              />
            </div>
          </div>
          <div className='mb-2 items-center justify-between lg:flex'>
            <label htmlFor='phone_number' className='block text-base lg:w-[30%]'>
              電話番号
            </label>
            <div className='flex-grow'>
              <InputForward
                {...register('phone_number')}
                error={!!errors?.phone_number}
                helperText={errors?.phone_number?.message}
                className='input-style-feedback'
              />
            </div>
          </div>
          <div className='mb-2 items-center justify-between lg:flex'>
            <label htmlFor='message' className='block text-base lg:w-[30%]'>
              メッセージ本文 (任意)
            </label>
            <div className='flex-grow'>
              <TextAreaForward {...register('content')} className='input-style-feedback h-32' />
            </div>
          </div>
          <div className='mb-2 mt-5 flex items-center justify-center lg:justify-start'>
            <div className='text-base lg:w-[30%]'></div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='min-w-[200px] rounded-sm bg-[#1DA1F2] px-2 py-4 text-center text-white'
            >
              送信
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default FormFeedback
