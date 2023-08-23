import * as yup from 'yup'
import { feedback } from './feedback'
import { phoneRegExp } from '~/utils/helper'

export interface FeedbackReq {
  title?: string
  name?: string
  phoneNumber?: string
  message?: string
}

export const feedbackValidate: any = yup
  .object({
    title: yup.string().required(feedback.required.title),
    name: yup.string().required(feedback.required.name),
    phoneNumber: yup.string().matches(phoneRegExp, feedback.format.phoneNumber)
  })
  .required()

export const initFeedbackValues: FeedbackReq = {
  title: '',
  name: '',
  phoneNumber: '',
  message: ''
}
