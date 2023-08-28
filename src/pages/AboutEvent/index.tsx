import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import Guide from './components/Guide'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import { fetchEventDetail } from '~/services/eventApi'
import { EventItem } from '~/models/Events'
import { useSetRecoilState } from 'recoil'
import { eventDetail } from '~/recoil/atom'
import { useEffect } from 'react'
import useEventDetails from '~/hook/useEventDetails'

function AboutEvent() {
  const { slug } = useParams()
  const { data } = useQuery<EventItem>(['eventDetail', slug], () => fetchEventDetail(slug || ''))
  const setDetailEvent = useSetRecoilState(eventDetail)
  const event = useEventDetails({ slug })

  useEffect(() => {
    if (!data) return
    setDetailEvent(data)
  }, [data, setDetailEvent])
  return (
    <Container>
      <div className='upcoming__event--page'>
        <VotingTimeEvent banner={event?.banner} />
        <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-10 lg:border-b-[2px] lg:border-gray-200 lg:pb-10'>
          <Guide title='概要' content={event?.about_desc} />
          <Guide title='スケジュール' content={event?.schedule_desc} />
        </div>
        <div className='grid  gap-5 lg:grid-cols-2 lg:gap-10'>
          <Guide title='投票ルール' content={event?.vote_rule_desc} />
          <Guide title='賞品' content={event?.reward_desc} />
        </div>
      </div>
    </Container>
  )
}

export default AboutEvent
