import { CadidateItem, Cadidates, ParamCadidate } from '~/models/cadidates'
import { http } from '~/utils/https'

const fetchCadidates = async (param: ParamCadidate): Promise<Cadidates> => {
  const response = await http.get('/candidates', {
    params: {
      param
    }
  })

  return response.data
}

const fetchCadidateDetail = async (id: string): Promise<CadidateItem> => {
  const response = await http.get(`/candidates/${id}`)
  return response.data
}

export { fetchCadidates, fetchCadidateDetail }
