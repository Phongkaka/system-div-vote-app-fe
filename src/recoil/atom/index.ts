import { atom } from 'recoil'
import { Cadidates } from '~/models/cadidates'

export const countState = atom({
  key: 'count',
  default: 0
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

export const cadidates = atom({
  key: 'cadidates',
  default: [] as Cadidates
})
