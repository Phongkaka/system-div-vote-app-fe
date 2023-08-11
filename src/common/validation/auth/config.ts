import * as yup from 'yup';

import { messages } from './messages';

export interface UserReq {
  email?: string;
  password?: string;
}

export const loginValidate: any = yup
  .object({
    email: yup.string().email(messages.format.email).required(messages.required.email),
    password: yup.string().required(messages.required.password),
  })
  .required();

export const initValues: UserReq = {
  email: '',
  password: ''
};
