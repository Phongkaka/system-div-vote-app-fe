import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import Swal from 'sweetalert2'
import { resType } from '~/models/response'
import { loading } from '~/recoil/atom'

type ApiCallFunction = (...params: []) => Promise<resType>

const useQueryData = (queryKey: string, apiCall: ApiCallFunction) => {
  const setLoading = useSetRecoilState(loading)

  return useQuery(
    queryKey,
    async (...params: []) => {
      setLoading(true)

      try {
        const response: resType = await apiCall(...params)

        if (response.code === 200 && response.success) {
          setLoading(false)
          return response.data || []
        }

        return new Error('リクエストは成功しませんでした')
      } catch (error) {
        setLoading(false)
        throw new Error('データの取得に失敗しました')
      }
    },
    {
      onError: () => {
        Swal.fire({
          title: 'Error!',
          text: 'データの取得に失敗しました',
          icon: 'error',
          confirmButtonText: 'Ok'
        }).then((r) => console.log(r))
      }
    }
  )
}

export default useQueryData
