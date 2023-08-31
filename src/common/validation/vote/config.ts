import * as yup from 'yup'
import { voteMessage } from './messages'

export const voteValidate: any = yup
  .object({
    number_points: yup.string().required(voteMessage.required.number_points)
  })
  .required()

export const initVoteValues: { number_points: number } = {
  number_points: 0
}
