import { AxiosResponse } from 'axios'
import { Flowise } from '~/models/auth'
import Swal from 'sweetalert2'

export const setUserLocalStorage = (response: AxiosResponse<Flowise.IUser>) => {
  try {
    const serializedUser = JSON.stringify(response)
    localStorage.setItem('user', serializedUser)
  } catch (error) {
    Swal.fire({
      title: 'Error !',
      text: 'can not save local Storage',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
}
