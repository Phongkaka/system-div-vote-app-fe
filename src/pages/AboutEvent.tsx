import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import { fetchEventDetail } from '~/services/eventApi'
import { EventItem } from '~/models/Events'
import { useSetRecoilState } from 'recoil'
import { eventDetail } from '~/recoil/atom'
import { useEffect } from 'react'
import useEventDetails from '~/hook/useEventDetails'
import Guide from '~/modules/AboutEvent/Guide'
import { ReactComponent as LoadingIcon } from '~/common/assets/images/loading.svg'

function AboutEvent() {
  const { slug } = useParams()
  const { data, isLoading } = useQuery<EventItem>(['eventDetail', slug], () =>
    fetchEventDetail(slug || '')
  )
  const setDetailEvent = useSetRecoilState(eventDetail)
  const event = useEventDetails({ slug })

  useEffect(() => {
    if (!data) return
    setDetailEvent(data)
  }, [data, setDetailEvent])

  return (
    <>
      {isLoading ? (
        <div className='flex min-h-[500px] items-center justify-center'>
          <LoadingIcon />
        </div>
      ) : (
        <Container>
          <div className='upcoming__event--page'>
            <VotingTimeEvent
              banner={event?.banner}
              start_time={event.start_time}
              end_time={event.end_time}
            />
            <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-10 lg:border-b-[2px] lg:border-gray-200 lg:pb-10'>
              <Guide title='概要' content={event?.about_desc} id='overview' />
              <Guide title='スケジュール' content={event?.schedule_desc} id='schedule' />
            </div>
            <div className='grid  gap-5 lg:grid-cols-2 lg:gap-10'>
              <Guide title='投票ルール' content={event?.vote_rule_desc} id='rule' />
              <Guide title='賞品' content={event?.reward_desc} id={'reward'} />
            </div>
          </div>
        </Container>
      )}
    </>
  )
}

export default AboutEvent
