import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import { useParams } from 'react-router'
import { EventContents } from '~/models/Events'
import useEventDetails from '~/hook/useEventDetails'
import Guide from '~/modules/AboutEvent/Guide'
import AboutEventSkeleton from '~/modules/AboutEvent/AboutEventSkeleton'

function AboutEvent() {
  const { slug } = useParams()
  const [event, isLoading] = useEventDetails({ slug })

  return (
    <>
      {isLoading ? (
        <AboutEventSkeleton />
      ) : (
        <Container>
          <div className='upcoming__event--page'>
            <VotingTimeEvent
              banner={event?.banner}
              start_time={event.start_time}
              end_time={event.end_time}
              name={event.name}
            />
            <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16 lg:border-b-[2px] lg:border-none lg:pb-10'>
              {event?.event_contents?.map((item: EventContents) => (
                <Guide key={item.id} title={item?.title} content={item?.content} />
              ))}
            </div>
            {/* <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-10 lg:border-b-[2px] lg:border-gray-200 lg:pb-10'>
              <Guide title='概要' content={event?.about_desc} id='overview' />
              <Guide title='スケジュール' content={event?.schedule_desc} id='schedule' />
            </div>
            <div className='grid  gap-5 lg:grid-cols-2 lg:gap-10'>
              <Guide title='投票ルール' content={event?.vote_rule_desc} id='rule' />
              <Guide title='賞品' content={event?.reward_desc} id={'reward'} />
            </div> */}
          </div>
        </Container>
      )}
    </>
  )
}

export default AboutEvent
