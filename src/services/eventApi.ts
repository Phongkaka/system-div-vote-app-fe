import { AxiosResponse } from 'axios'
import { UseQueryResult } from 'react-query'
import { http } from '~/utils/https'

const fetchEvents = async (status: number, page: number) => {
  const response = await http.get('/events', {
    params: {
      status: status,
      page: page
    }
  })

  return response
}

const useFetchEventDetail = async (slug: string): Promise<UseQueryResult<AxiosResponse>> => {
  const response = await http.get(`/events/${slug}`)
  return response.data
}

export { fetchEvents, useFetchEventDetail }
