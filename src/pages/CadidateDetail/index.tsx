import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CadidateItem } from '~/models/cadidates'
import { fetchCadidateDetail } from '~/services/cadidatesAPI'

const CandidateDetail = () => {
  const params = useParams()
  const idCandidate = params.id

  const { data: detailcadidate } = useQuery<CadidateItem>(['cadidateDetail', idCandidate], () =>
    fetchCadidateDetail(`${idCandidate}`)
  )

  return (
    <div>
      <img src={detailcadidate?.avatar} alt='avatar' />
      <span>{detailcadidate?.name}</span>
    </div>
  )
}

export default CandidateDetail
