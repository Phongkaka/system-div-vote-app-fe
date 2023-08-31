import { http } from '~/utils/https'

const purchaseHistory = async () => {
  const data = await http.get('/users/me/point-purchase-history')

  return data
}

const FetchUseMe = async () => {
  const data = await http.get('/users/me')

  return data
}

export { purchaseHistory, FetchUseMe }
