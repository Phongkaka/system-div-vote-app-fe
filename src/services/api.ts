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

const register = async (params: Flowise.IRegister) => {
  const data = await http.post('/auth/register', params)

  return data
}

const forgotPassword = async (params: Flowise.IForGotPassWordData) => {
  const data = await http.post('/auth/forgot-password', params)

  return data
}

const resetPassword = async (params: Flowise.IResetPasswordData) => {
  const data = await http.post('/auth/reset-password', params)

  return data
}

const refreshToken = async (params: Flowise.RefreshToken): Promise<Flowise.RefreshTokenRes> => {
  const response: Flowise.RefreshTokenRes = await http.post('/auth/refresh', {
    refresh_token: params
  })
  return response
}

export { login, logout, register, refreshToken, resetPassword, forgotPassword }
