import * as yup from 'yup'
import { feedback } from './feedback'

export interface FeedbackReq {
  title?: string
  name?: string
  phoneNumber?: string
  message?: string
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
