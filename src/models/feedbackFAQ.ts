import { ReactElement } from 'react'

export interface AccordionItem {
  id: number
  title: string
  content: ReactElement
}

export interface FeedbackFormData {
  title?: string
  name?: string
  email?: string
  phone_number?: string
  content?: string
}
