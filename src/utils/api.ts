import { Flowise } from '~/models/auth'
import { http } from '~/utils/https'

const login = async (params: Flowise.ILogin) => {
  const data = await http.post('/auth/login', params)

  return data
}

const logout = async () => {
  const data = await http.delete('/auth/logout')

  return data
}

export { login, logout }
