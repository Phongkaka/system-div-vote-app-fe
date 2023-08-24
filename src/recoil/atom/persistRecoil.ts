import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom: persistIsLoggedIn } = recoilPersist({
  key: 'isLoggedIn',
  storage: localStorage
})

const { persistAtom: persistUserInfo } = recoilPersist({
  key: 'userInfo',
  storage: localStorage
})

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
