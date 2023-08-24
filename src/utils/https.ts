import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import Swal from 'sweetalert2'

const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { userInfo } = JSON.parse(localStorage.getItem('userInfo') || '{}')
  if (userInfo && config.headers) {
    config.headers.Authorization = 'Bearer ' + userInfo.access_token
  }
  return config
}

const errorInterceptor = (error: AxiosError<{ errors: string }>): Promise<string> => {
  if (error.response) {
    const statusCode = error.response.status
    switch (statusCode) {
      case 422:
      case 401:
        // handle validation errors
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
