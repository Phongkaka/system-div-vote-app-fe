import { http } from '~/utils/https'

const purchaseHistory = async () => {
  const data = await http.get('/users/me/point-purchase-history')

  return data
}

export { purchaseHistory }
