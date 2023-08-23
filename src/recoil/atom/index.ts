import { atom } from 'recoil'

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

export const isLoggedInState = atom({
  key: 'isLoggedIn',
  default: false,
});
