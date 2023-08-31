import { recoilPersist } from 'recoil-persist'

const { persistAtom: persistIsLoggedIn } = recoilPersist({
  key: 'isLoggedIn',
  storage: localStorage
})

const { persistAtom: persistUserInfo } = recoilPersist({
  key: 'userInfo',
  storage: localStorage
})

const { persistAtom: persistCart } = recoilPersist({
  key: 'cart',
  storage: localStorage
})

const { persistAtom: persistTotal } = recoilPersist({
  key: 'totalCart',
  storage: localStorage
})

export { persistIsLoggedIn, persistUserInfo, persistCart, persistTotal }
