import { atom } from 'recoil'
import { Flowise } from '~/models/auth'

export const countState = atom({
  key: 'count',
  default: 0
})

export const listPosSate = atom({
  key: 'listPos',
  default: [] as Flowise.IPost[]
})

export const loading = atom({
  key: 'loading',
  default: false
})

export const toast = atom({
  key: 'toast',
  default: {
    message: '',
    type: '',
    show: false
  }
})
