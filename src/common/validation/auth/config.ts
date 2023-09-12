import * as yup from 'yup'

import { messages } from './messages'
import { phoneRegExp } from '~/utils/helper'

export interface UserReq {
  email?: string
  password?: string
}

export interface RegisterReq {
  email?: string
  password?: string
  name?: string
  confirmPassword?: string
  phone?: string
}
export interface ResetReq {
  email?: string
  new_password?: string
  confirmPassword?: string
}
export interface ForgotReq {
  email?: string
}

export const loginValidate: any = yup
  .object({
    email: yup.string().email(messages.format.email).required(messages.required.email),
    password: yup.string().required(messages.required.password)
  })
  .required()

export const registerValidate: any = yup
  .object({
    email: yup.string().email(messages.format.email).required(messages.required.email),
    password: yup
      .string()
      .min(8, messages.format.minLength)
      .max(12, messages.format.maxLength)
      .required(messages.required.password),
    confirmPassword: yup
      .string()
      .required(messages.required.confirmPassword)
      .oneOf([yup.ref('password')], messages.format.passwordMatch),
    name: yup.string().required(messages.required.name),
    phone: yup.string().matches(phoneRegExp, messages.format.phone)
  })
  .required()

export const resetValidate: any = yup
  .object({
    email: yup.string().email(messages.format.email).required(messages.required.email),
    new_password: yup
      .string()
      .min(8, messages.format.minLength)
      .max(12, messages.format.maxLength)
      .required(messages.required.password),
    confirmPassword: yup
      .string()
      .required(messages.required.confirmPassword)
      .oneOf([yup.ref('new_password')], messages.format.passwordMatch)
  })
  .required()
export const forgotValidate: any = yup
  .object({
    email: yup.string().email(messages.format.email).required(messages.required.email)
  })
  .required()

export const initValues: UserReq = {
  email: '',
  password: ''
}

export const initRegisterValues: RegisterReq = {
  email: '',
  password: '',
  name: '',
  confirmPassword: '',
  phone: ''
}

export const initResetValues: ResetReq = {
  email: '',
  new_password: '',
  confirmPassword: ''
}

export const initForgotValues: ForgotReq = {
  email: ''
}
