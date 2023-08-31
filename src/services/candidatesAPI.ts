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

export { fetchCandidateDetail, fetchCandidateSearch, fetchSupporters }
