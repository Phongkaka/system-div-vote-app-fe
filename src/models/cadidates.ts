export interface ParamCadidate {
  filter: {
    where?: any
    order?: any
    limit: number
  }
}
export interface CadidateItem {
  id: number
  avatar: string
  name: string
  point: number
  rank_type_id: number
  social_links: SocialLink
}
export interface SocialLink {
  id: number
  candidate_id: number
  social_type_id: number
  link: string
  rank_type_id: number
}

export type Cadidates = CadidateItem[]
