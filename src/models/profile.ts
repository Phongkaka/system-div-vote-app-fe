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

export interface VoteHistoryType {
  id: number
  total?: number
  data?: VoteDetailsType[]
}

export interface VoteDetailsType {
  id: number
  candidate: { id: number; name: string }
  candidate_id?: number
  created_at?: Date
  point_vote?: number
}
