import axios from 'axios'
import { store } from '~/store'

const instance = axios.create({
  baseURL: import.meta.env.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(function (config) {
  const token = store.getState().user.accessToken
  config.headers.Authorization = token

  return config
})

export default instance
