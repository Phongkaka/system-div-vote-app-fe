import { UseMutationResult, useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'

import { loading } from '~/recoil/atom'
import { Flowise } from '~/models/auth'
import { login } from '~/utils/api'
import { setUserLocalStorage } from '~/utils/userStorage'

const useQueryLogin = (): UseMutationResult<AxiosResponse, string, Flowise.ILogin, string> => {
  const navigate = useNavigate()
  const setLoading = useSetRecoilState(loading)
  return useMutation(
    async (params: Flowise.ILogin) => {
      setLoading(true)
      return await login(params)
    },
    {
      onSuccess: (response) => {
        setUserLocalStorage(response)
        setLoading(false)
        navigate('/#')
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

export { useQueryLogin }
