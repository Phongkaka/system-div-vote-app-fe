export interface PaymentType {
  id: number
  amount?: number
  created_at?: string
  status?: number
  point_purchase_details?: {
    id: number
    point_type?: {
      id: number
      name?: string
    }
    quantity?: number
  }[]
}
