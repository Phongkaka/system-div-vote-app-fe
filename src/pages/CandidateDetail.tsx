import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { FlowiseCandidate } from '~/models/candidates.ts'
import { fetchCandidateDetail } from '~/services/candidatesAPI.ts'

const CandidateDetail = () => {
  const params = useParams()
  const idCandidate = params.id

  const { data: detailCandidate } = useQuery<FlowiseCandidate.ICandidateItem>(
    ['candidateDetail', idCandidate],
    () => fetchCandidateDetail(`${idCandidate}`)
  )

  return (
    <div>
      <img src={detailCandidate?.avatar} alt='avatar' />
      <span>{detailCandidate?.name}</span>
    </div>
  )
}

export default CandidateDetail
