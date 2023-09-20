export interface EventItem {
  id?: number
  name?: string
  slug?: string
  logo?: string
  about_desc?: string
  schedule_desc?: string
  vote_rule_desc?: string
  reward_desc?: string
  status?: number
  banner?: string
  link?: string
  rank_types?: { id: number; name: string }[]
  start_time?: Date
  end_time?: Date
  event_contents?: EventContents[]
}

export interface EventContents {
  content?: string
  id?: number
  sort?: number
  title?: string
}

export interface PointType {
  id: number
  logo: string
  name: string
  point_original: number
  price: number
  promotion: number
}

export type Events = EventItem[]
