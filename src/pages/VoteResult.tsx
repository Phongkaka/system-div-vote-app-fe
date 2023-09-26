import { useRecoilValue } from 'recoil'
import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import { FlowiseCandidate } from '~/models/candidates'
import Candidate from '~/components/Candidate'
import InforResult from '~/modules/VoteResult/InforResult'
import Title from '~/modules/VoteResult/Title'
import { eventDetail } from '~/recoil/atom'

function AboutEvent() {
  const event = useRecoilValue(eventDetail)
  return (
    <Container>
      <div className='upcoming__event--page'>
        <div className='time__vote'>
          <VotingTimeEvent
            banner={event?.banner}
            start_time={event.start_time}
            end_time={event.end_time}
          />
        </div>
        <div className='border-b border-[#ccc] pb-8'>
          <Title title='投票結果発表' />
          <p className='mx-auto my-auto w-11/12 leading-1.8 xl:w-[1024px]'>
            {event?.result_notification_desc}
          </p>
        </div>
        <div className='border-b border-[#ccc] pb-8 pt-12'>
          {event?.rank_types?.map((itemRankType: any, index) => (
            <div key={index}>
              <Title title={itemRankType.name} />
              <ul className='m-auto mt-5 flex flex-wrap justify-between'>
                {itemRankType?.Candidates?.length > 0 &&
                  itemRankType?.Candidates?.slice()
                    .sort((a: { No: number }, b: { No: number }) => a.No - b.No)
                    ?.map((item: FlowiseCandidate.ICandidateItem) => (
                      <li className='relative w-full lg:w-[48%]' key={item.id}>
                        <Candidate
                          candidate_photos={item?.candidate_photos}
                          status={event?.status}
                          id={item.id}
                          social_links={item.social_links}
                          candidateImg={item.avatar}
                          numRank={item.No}
                          numberVote={item.point}
                          nameCandidate={item.name}
                          nameCandidateDetail={item.name}
                        />
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
        <InforResult />
      </div>
    </Container>
  )
}

export default AboutEvent
