export interface EventItem {
  id: string
  name: string
  slug: string
  logo: string
  about_desc: string
  schedule_desc: string
  vote_rule_desc: string
  reward_desc: string
  status: string
  banner: string
  createdAt: string
}

export type Events = EventItem[]
