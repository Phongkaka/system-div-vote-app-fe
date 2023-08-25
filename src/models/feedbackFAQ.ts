export interface AccordionItem {
  id: number
  name?: string
  frequently_asked_questions: QuestionsAskedType[]
}

export interface QuestionsAskedType {
  id: number
  answer?: string
  question?: string
}

export interface FeedbackFormData {
  title?: string
  name?: string
  email?: string
  phone_number?: string
  content?: string
}
