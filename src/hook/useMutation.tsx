import { UseMutationResult, useMutation } from 'react-query'

import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'

import { isLoggedInState, userInfo } from '~/recoil/atom/auth'
import { loading, toast } from '~/recoil/atom'
import { Flowise } from '~/models/auth'
import { forgotPassword, login, register, resetPassword } from '~/services/api'
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
  errorMessage: string,
  isNotSwal?: boolean
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
          title: '成功',
          text: successMessage,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        if (!isNotSwal) {
          Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
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
  return useCustomMutation(register, '登録完了', '登録に失敗しました')
}

const useQueryForgotPassword = (): UseMutationResult<
  AxiosResponse,
  string,
  Flowise.IForGotPassWordData,
  string
> => {
  return useCustomMutation(
    forgotPassword,
    '電子メールリセットパスワードを正常に送信してください！',
    'メールの送信に失敗しました'
  )
}

const useQueryResetPassword = (): UseMutationResult<
  AxiosResponse,
  string,
  Flowise.IResetPasswordData,
  string
> => {
  return useCustomMutation(
    resetPassword,
    'パスワードの成功をリセットします',
    'パスワードのリセットに失敗しました'
  )
}

const useQueryFeedback = (): UseMutationResult<AxiosResponse, string, FeedbackFormData, string> => {
  return useCustomMutation(feedback, 'フィードバックの成功', 'フィードバックに失敗しました')
}

const useMutationVote = (): UseMutationResult<AxiosResponse, string, any, string> => {
  return useCustomMutation(voteCandidate, '投票成功しました！', '投票に失敗しました', true)
}

export {
  useQueryLogin,
  useQueryRegister,
  useQueryFeedback,
  useMutationVote,
  useQueryResetPassword,
  useQueryForgotPassword
}
