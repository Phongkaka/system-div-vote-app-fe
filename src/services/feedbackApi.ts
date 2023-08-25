import { FeedbackFormData } from '~/models/feedbackFAQ'
import { http } from '~/utils/https'

const feedback = async (params: FeedbackFormData) => {
  const data = await http.post('/feedbacks', params)

  return data
}

const fetchFAQ = async () => {
  const data = await http.get('/faqs')

  return data
}

export { feedback, fetchFAQ }
