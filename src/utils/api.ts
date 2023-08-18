import { Flowise } from '~/models/auth'
import { http } from '~/utils/https'

const login = async (params: Flowise.ILogin) => {
  const data = await http.post('/auth/login', params)

  return data
}

export { login }
