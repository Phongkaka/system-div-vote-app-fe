import { atom } from 'recoil'
import { EventItem } from '~/models/Events'
import { FlowiseCandidate } from '~/models/candidates.ts'

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
  default: ''
})

export const eventDetail = atom({
  key: 'EventDetail',
  default: {} as EventItem
})

export const candidates = atom({
  key: 'candidates',
  default: [] as FlowiseCandidate.Candidates
})
