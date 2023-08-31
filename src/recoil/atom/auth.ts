import { atom } from 'recoil'
import { persistIsLoggedIn, persistUserInfo } from './persist'

export const isLoggedInState = atom({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistIsLoggedIn]
})

export const userInfo = atom({
  key: 'userInfo',
  default: false,
  effects_UNSTABLE: [persistUserInfo]
})
