import { FlowiseCandidate } from '~/models/candidates.ts'
import { EventItem } from '~/models/Events'
import { http } from '~/utils/https'

const fetchEvents = async (limit?: number | string, status?: number | null) => {
  const response = await http.get('/events', {
    params: {
      filter: {
        order: {
          point: 'desc'
        },
        where: {
          status
        },
        limit: limit
      }
    }
  })

  return response
}

const fetchEventDetail = async (slug: string): Promise<EventItem> => {
  const response = await http.get(`/events/${slug}`)
  return response.data
}

const fetchPointTypes = async () => {
  const response = await http.get('/point-types')

  return response
}

const voteCandidate = async (params: FlowiseCandidate.IVoteCandidate) => {
  const response = await http.post('/users/me/vote', params)

  return response.data
}

export { fetchEvents, fetchEventDetail, fetchPointTypes, voteCandidate }
