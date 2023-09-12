export interface PaymentType {
  id: number
  amount?: number
  created_at?: string
  status?: number
  point_purchase_details?: PurchaseDetailsType[]
}

export interface PurchaseDetailsType {
  id: number
  point_type?: {
    id: number
    name?: string
    price?: number
  }
  quantity?: number
}
