import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { refreshToken } from '~/services/api'
import Swal from 'sweetalert2'

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
      case 401:
        // handle validation errors
        if (error?.response?.data?.message === 'トークンの有効期限が切れています') {
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
            console.log(error)
          }
        } else {
          console.log(error)
        }
        break
      case 429:
        Swal.fire({
          title: 'Error !',
          text: error?.response?.data?.errors,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
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
