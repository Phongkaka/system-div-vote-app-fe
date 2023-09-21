export declare namespace FlowiseCandidate {
  interface ICandidateItem {
    id: number
    top: number
    avatar: string
    name: string
    point: number
    rank_type_id: number
    social_links: ISocialLink[]
    No?: number
    candidate_photos: ICandidatePhotos[]
    rank_type?: {
      event_id: number
      id: number
      name: string
      updated_at: Date
    }
  }

  interface ICandidatePhotos {
    name?: string
    id?: string
  }

  interface ISupporters {
    point?: string
    user_id?: number
    user?: TUser
  }

  interface ISocialLink {
    id: number
    candidate_id: number
    social_type_id: number
    link: string
    social_type: {
      id: number
      logo: string
      name: string
    }
  }

  interface ICandidateSearch {
    filter: ICandidateFilter
  }

  interface ICandidateFilter {
    where?: {
      name?: {
        like?: string
      }
      event_id?: number
      rank_type_id?: number
    }
    limit?: number
  }

  interface IVoteCandidate {
    number_points: number
    candidate_id: number
  }

  export type Candidates = ICandidateItem[]
  export type TUser = {
    id?: number
    name: string
  }
  export type ISupporterResponse = ISupporters[]
}
