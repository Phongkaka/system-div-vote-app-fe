import { UseMutationResult, useMutation } from 'react-query'

import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'

import { isLoggedInState, userInfo } from '~/recoil/atom/auth'
import { loading, toast } from '~/recoil/atom'
import { Flowise } from '~/models/auth'
import { login, register } from '~/services/api'
import { FeedbackFormData } from '~/models/feedbackFAQ'
import { feedback } from '~/services/feedbackApi'
import { voteCandidate } from '~/services/eventApi'

const msgError = `メールアドレスまたはパスワードに誤りがあります。
もう一度入力してください。`

const useQueryLogin = (): UseMutationResult<AxiosResponse, string, Flowise.ILogin, string> => {
  const setLoading = useSetRecoilState(loading)
  const setIsLogged = useSetRecoilState(isLoggedInState)
  const setUserInfo = useSetRecoilState(userInfo)
  const setStateToast = useSetRecoilState(toast)

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
          access_token: response.access_token,
          refresh_token: response.refresh_token,
          expires_in: response.expires_in
        }
        setUserInfo(infoUser)
        setIsLogged(true)
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        setStateToast(msgError)
      }
    }
  )
}

const useCustomMutation = <T, P>(
  mutationFn: (params: P) => Promise<T>,
  successMessage: string,
  errorMessage: string
): UseMutationResult<T, string, P, string> => {
  const setLoading = useSetRecoilState(loading)

  return useMutation(
    async (params: P) => {
      setLoading(true)
      return await mutationFn(params)
    },
    {
      onSuccess: () => {
        Swal.fire({
          title: 'Success',
          text: successMessage,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
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
  return useCustomMutation(register, 'Registration success', 'Registration failed')
}

const useQueryFeedback = (): UseMutationResult<AxiosResponse, string, FeedbackFormData, string> => {
  return useCustomMutation(feedback, 'Feedback success', 'Feedback failed')
}

const useMutationVote = (): UseMutationResult<AxiosResponse, string, any, string> => {
  return useCustomMutation(voteCandidate, 'Voting successful!', 'Vote failed')
}

export { useQueryLogin, useQueryRegister, useQueryFeedback, useMutationVote }
