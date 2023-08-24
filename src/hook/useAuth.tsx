import { UseMutationResult, useMutation } from 'react-query'

import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'

import { isLoggedInState, userInfo } from '~/recoil/atom/persistRecoil'
import { loading } from '~/recoil/atom'
import { Flowise } from '~/models/auth'
import { login, register } from '~/services/api'

const useQueryLogin = (): UseMutationResult<AxiosResponse, string, Flowise.ILogin, string> => {
  const setLoading = useSetRecoilState(loading)
  const setIsLogged = useSetRecoilState(isLoggedInState)
  const setUserInfo = useSetRecoilState(userInfo)

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
        setUserInfo(infoUser)
        setIsLogged(true)
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

const useQueryRegister = (): UseMutationResult<
  AxiosResponse,
  string,
  Flowise.IRegister,
  string
> => {
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
