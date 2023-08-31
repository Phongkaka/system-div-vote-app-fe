import { useMutation } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { ICheckOutSession } from '~/models/cart'
import { loading } from '~/recoil/atom'
import { checkoutSessionPayment } from '~/services/payment'

const useCreateCheckoutSession = () => {
  const setLoading = useSetRecoilState(loading)

  return useMutation(
    async (params: ICheckOutSession) => {
      setLoading(true)
      return await checkoutSessionPayment(params)
    },
    {
      onSuccess: () => {
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
      }
    }
  )
}

export { useCreateCheckoutSession }
