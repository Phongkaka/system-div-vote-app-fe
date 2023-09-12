import { http } from '~/utils/https'
import { FlowiseCandidate } from '~/models/candidates.ts'

const fetchCandidateDetail = async (id: string): Promise<FlowiseCandidate.ICandidateItem> => {
  const response = await http.get(`/candidates/${id}`)
  return response.data
}

const fetchCandidateSearch = async (
  param: FlowiseCandidate.ICandidateSearch
): Promise<FlowiseCandidate.Candidates> => {
  const response = await http.get(`/candidates`, { params: param })
  return response.data
}

const fetchSupporters = async (id: number): Promise<FlowiseCandidate.ISupporterResponse> => {
  const response = await http.get(`/candidates/${id}/supporters`)
  return response.data
}

const fetchCandidates = async (
  limit: number | string,
  rank_type_id: number | null
): Promise<any> => {
  const response = await http.get('/candidates', {
    params: {
      filter: {
        order: {
          point: 'desc'
        },
        where: {
          rank_type_id
        },
        limit: limit
      }
    }
  })
  return response
}

export { fetchCandidateDetail, fetchCandidateSearch, fetchSupporters, fetchCandidates }
