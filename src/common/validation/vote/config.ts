import * as yup from 'yup'
import { voteMessage } from './messages'

export const voteValidate: any = yup
  .object({
    number_points: yup
      .number()
      .typeError(voteMessage.invalidNumber)
      .required(voteMessage.required.number_points)
      .min(1, voteMessage.minPoints) 
  })
  .required()

export const initVoteValues: { number_points: number | null } = {
  number_points: null
}
