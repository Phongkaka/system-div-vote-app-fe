import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'
import { resType } from '~/models/response'
import { loading } from '~/recoil/atom'
import { purchaseHistory } from '~/services/userApi'

type ApiCallFunction = () => Promise<resType>

const useQueryData = (queryKey: string, apiCall: ApiCallFunction) => {
  const setLoading = useSetRecoilState(loading)

  return useQuery(
    queryKey,
    async () => {
      setLoading(true)

      try {
        const response: resType = await apiCall()

        if (response.code === 200 && response.success) {
          setLoading(false)
          return response.data || []
        }

        throw new Error('Request was not successful')
      } catch (error) {
        setLoading(false)
        throw new Error('Failed to fetch data')
      }
    },
    {
      onError: () => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to fetch data',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  )
}

const useQueryPurchaseHistory = () => {
  return useQueryData('purchaseHistory', purchaseHistory)
}

export { useQueryPurchaseHistory }
