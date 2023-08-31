import { http } from '~/utils/https'
import { ICheckOutSession } from '~/models/cart'

const checkoutSessionPayment = async (param: ICheckOutSession): Promise<ICheckOutSession> => {
  const response = await http.post(`/payments/create-checkout-session`, param)
  return response.data
}

export { checkoutSessionPayment }
