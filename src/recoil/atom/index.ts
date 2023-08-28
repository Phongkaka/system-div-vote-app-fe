import { atom } from 'recoil'
import { EventItem } from '~/models/Events'
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

export const eventDetail = atom({
  key: 'EventDetail',
  default: {} as EventItem
})

export const cadidates = atom({
  key: 'cadidates',
  default: [] as Cadidates
})
