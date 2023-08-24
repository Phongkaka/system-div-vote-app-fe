import { AxiosResponse } from 'axios'
import { UseQueryResult } from 'react-query'
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

const useFetchEventsQuery = async (
  status: number,
  page: number
): Promise<UseQueryResult<AxiosResponse>> => {
  const response = await http.get('/events', {
    params: {
      status: status,
      page: page
    }
  })

  return response.data?.data
}

export { login, logout, register, useFetchEventsQuery }
