import { useRecoilValue } from 'recoil'
import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import { FlowiseCandidate } from '~/models/candidates'
import Candidate from '~/modules/Vote/TabsVote/components/BlockRank/Candidate'
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
            「ミスモデルプレス ミスターモデルプレスオーディション 2023
            SUMMERを応援いただきありがとうございました。
            投票の結果、以下、候補者がオンライン最終面談に進出いたしました。
            入賞者の発表につきましては、ミスモデルプレスオーディション 2023
            SUMMER公式サイトをご参照ください。
            尚、審査内容や合否の結果については、お答えできませんので、ご了承ください。
          </p>
        </div>
        <div className='border-b border-[#ccc] pb-8 pt-12'>
          {event?.rank_types?.map((itemRankType: any, index) => (
            <div key={index}>
              <Title title={event.name} />
              <ul className='m-auto mt-5 flex flex-wrap justify-between'>
                {itemRankType?.candidates?.map((item: FlowiseCandidate.ICandidateItem) => (
                  <li className='relative w-full lg:w-[48%]' key={item.id}>
                    <Candidate
                      id={item.id}
                      social_links={item.social_links}
                      candidateImg={item.avatar}
                      numRank={item.top}
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
