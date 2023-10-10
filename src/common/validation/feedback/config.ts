import * as yup from 'yup'
import { feedback } from './feedback'
import { phoneRegExp } from '~/utils/helper'
import { FeedbackFormData } from '~/models/feedbackFAQ'

export const feedbackValidate: any = yup
  .object({
    email: yup.string().email(feedback.format.email).required(feedback.required.email),
    title: yup.string().required(feedback.required.title),
    name: yup.string().required(feedback.required.name),
    phone_number: yup
      .string()
      .required(feedback.required.phone)
      .matches(phoneRegExp, feedback.format.phone_number)
      .min(10, feedback.format.phone_number)
  })
  .required()

export const initFeedbackValues: FeedbackFormData = {
  title: '',
  name: '',
  email: '',
  phone_number: '',
  content: ''
}
