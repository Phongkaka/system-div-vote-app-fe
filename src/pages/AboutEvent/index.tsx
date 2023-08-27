import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import Guide from './components/Guide'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import { useFetchEventDetail } from '~/services/eventApi'
import { EventItem } from '~/models/Events'

function AboutEvent() {
  const { slug } = useParams()
  const { data: detailEvent } = useQuery<EventItem>(['eventDetail', slug], () =>
    useFetchEventDetail(slug || '')
  )
  return (
    <Container>
      <div className='upcoming__event--page'>
        <VotingTimeEvent banner={detailEvent?.banner} />
        <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-10 lg:border-b-[2px] lg:border-gray-200 lg:pb-10'>
          <Guide title='概要' content={detailEvent?.about_desc} />
          <Guide title='スケジュール' content={detailEvent?.schedule_desc} />
        </div>
        <div className='grid  gap-5 lg:grid-cols-2 lg:gap-10'>
          <Guide title='投票ルール' content={detailEvent?.vote_rule_desc} />
          <Guide title='賞品' content={detailEvent?.reward_desc} />
        </div>
      </div>
    </Container>
  )
}

export default AboutEvent
