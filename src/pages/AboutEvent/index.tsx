import VotingTimeEvent from '~/components/VotingTimeEvent'
import Container from '~/layouts/components/Container'
import Guide from './components/Guide'

function AboutEvent() {
  return (
    <Container>
      <div className='upcoming__event--page'>
        <VotingTimeEvent />
        <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-10 lg:border-b-[2px] lg:border-gray-200 lg:pb-10'>
          <Guide
            title='概要'
            content='ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト '
          />
          <Guide
            title='スケジュール'
            content='ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト '
          />
        </div>
        <div className='grid  gap-5 lg:grid-cols-2 lg:gap-10'>
          <Guide
            title='投票ルール'
            content='ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト '
          />
          <Guide
            title='賞品'
            content='ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト ダミーテキストダミーテキスト ダミーテキスト ダミーテキスト '
          />
        </div>
      </div>
    </Container>
  )
}

export default AboutEvent
