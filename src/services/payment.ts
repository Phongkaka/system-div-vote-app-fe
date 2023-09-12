import { http } from '~/utils/https'
import { ICheckOutSession } from '~/models/cart'

const checkoutSessionPayment = async (param: ICheckOutSession): Promise<ICheckOutSession> => {
  const response = await http.post(`/payments/create-checkout-session`, param)
  return response.data
}

const paymentPaid = async (session_id: string | null): Promise<ICheckOutSession> => {
  const response = await http.get(`/payments/paid/${session_id}`)
  return response.data
}

export { checkoutSessionPayment, paymentPaid }
