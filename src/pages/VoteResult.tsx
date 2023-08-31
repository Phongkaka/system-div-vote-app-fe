import bannerImg from '~/common/assets/images/event-02.jpg'
import Banner from '~/layouts/components/Banner'
import CandidateEvent from '~/modules/VoteResult/CandidateEvent'
import InforResult from '~/modules/VoteResult/InforResult'
import Title from '~/modules/VoteResult/Title'

function AboutEvent() {
  return (
    <>
      <div className='upcoming__event--page'>
        <Banner img={bannerImg} />
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
          <Title title='ミスモデルプレス' />
          <ul className='m-auto mt-12 grid w-10/12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
          </ul>
        </div>
        <div className='border-b border-[#ccc] pb-8 pt-12'>
          <Title title='ミス 部門' />
          <ul className='m-auto mt-12 grid w-10/12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
            <li className='flex justify-center'>
              <CandidateEvent />
            </li>
          </ul>
        </div>
        <InforResult />
      </div>
    </>
  )
}

export default AboutEvent
