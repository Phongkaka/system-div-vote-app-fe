import { atom } from 'recoil'
import { Product } from '~/models/cart'
import { persistCart, persistTotal } from './persist'

export const cartState = atom<Product[]>({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [persistCart]
})

export const totalState = atom<number>({
  key: 'totalState',
  default: 0,
  effects_UNSTABLE: [persistTotal]
})
