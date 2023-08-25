import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import Swal from 'sweetalert2'
import { refreshToken } from '~/services/api'

const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { userInfo } = JSON.parse(localStorage.getItem('userInfo') || '{}')
  if (userInfo && config.headers) {
    config.headers.Authorization = 'Bearer ' + userInfo.access_token
  }
  return config
}

const errorInterceptor = async (
  error: AxiosError<{ errors: string; message: string }>
): Promise<string> => {
  if (error.response) {
    const statusCode = error.response.status
    switch (statusCode) {
      case 422:
      case 401:
        // handle validation errors
        if (error?.response?.data?.message === 'TOKEN_EXPIRED') {
          const { userInfo } = JSON.parse(localStorage.getItem('userInfo') || '{}')
          try {
            // Call refreshToken
            const res = await refreshToken(userInfo.refresh_token)
            // Update the token in localStorage or your authentication store
            userInfo.access_token = res.access_token
            userInfo.refresh_token = res.refresh_token

            localStorage.setItem('userInfo', JSON.stringify({ userInfo }))

            // Retry the original API call with the new token
            const originalRequest = error.config
            if (originalRequest) {
              originalRequest.headers.Authorization = `Bearer ${userInfo.access_token}`
              return axios(originalRequest)
            }
          } catch (refreshError) {
            // Handle refreshToken error
            Swal.fire({
              title: 'Error !',
              text: 'Refresh token failed',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
        } else {
          Swal.fire({
            title: 'Error !',
            text: error?.response?.data?.errors,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
        break
      default:
        // handle other errors
        break
    }
  }
  return Promise.reject(error.response && error.response.data)
}

const http = axios.create({
  baseURL: import.meta.env.VITE_API_VOTE,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000
})

http.interceptors.request.use(authInterceptor)
http.interceptors.response.use((res) => res.data, errorInterceptor)

export { http }
