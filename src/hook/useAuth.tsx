import { UseMutationResult, useMutation } from 'react-query'

import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'

import { loading } from '~/recoil/atom'
import { Flowise } from '~/models/auth'
import { login, register } from '~/utils/api'
import useLocalStorageState from './useLocalStorageState'

const useQueryLogin = (): UseMutationResult<AxiosResponse, string, Flowise.ILogin, string> => {
  const [_, setUser] = useLocalStorageState<Flowise.IUser>('access_token', {} as Flowise.IUser)
  const setLoading = useSetRecoilState(loading)
  return useMutation(
    async (params: Flowise.ILogin) => {
      setLoading(true)
      return await login(params)
    },
    {
      onSuccess: (response: any) => {
        const infoUser = {
          data: {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email
          },
          access_token: response.access_token
        }
        setUser(infoUser)
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        Swal.fire({
          title: 'Error !',
          text: 'Password or email not correct',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  )
}

const useQueryRegister = (): UseMutationResult<AxiosResponse, string, Flowise.IRegister, string> => {
  const setLoading = useSetRecoilState(loading)
  return useMutation(
    async (params: Flowise.IRegister) => {
      setLoading(true)
      return await register(params)
    },
    {
      onSuccess: () => {
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        Swal.fire({
          title: 'Error!',
          text: 'Registration failed',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  )
}


export { useQueryLogin, useQueryRegister }