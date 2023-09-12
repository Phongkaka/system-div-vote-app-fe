export interface Product {
  id: number
  name?: string
  price: number
  quantity: number
  logo?: string
}
export interface ICheckOutSession {
  items: {
    point_type_id?: number
    quantity?: number
  }[]
  session_id?: string
  url?: string
  redirect_url?: string
}
