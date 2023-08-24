import { UseMutationResult, useMutation } from 'react-query'

import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'

import { loading } from '~/recoil/atom'
import { feedback } from '~/services/feedbackApi'
import { FeedbackFormData } from '~/models/feedbackFAQ'

const useQueryFeedback = (): UseMutationResult<AxiosResponse, string, FeedbackFormData, string> => {
  const setLoading = useSetRecoilState(loading)
  return useMutation(
    async (params: FeedbackFormData) => {
      setLoading(true)
      return await feedback(params)
    },
    {
      onSuccess: () => {
        Swal.fire({
          title: 'success',
          text: 'Feedback success',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        Swal.fire({
          title: 'Error!',
          text: 'Feedback failed',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  )
}

export { useQueryFeedback }
