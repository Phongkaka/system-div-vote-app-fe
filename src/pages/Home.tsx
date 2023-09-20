import { fetchEvents } from '~/services/eventApi'
import useQueryData from '~/hook/useQueryData'
import Events from '~/modules/Home/EventEnd/Events'
import { TEXT } from '~/constants/path'
import Slide from '../components/Slide/Slide'

function Home() {
  const { data: comingSoon, isLoading } = useQueryData('status0', () => fetchEvents(TEXT.ALL, 0))
  const { data: progress, isLoading: isLoadingProgress } = useQueryData('status1', () =>
    fetchEvents(TEXT.ALL, 1)
  )
  const { data: finished, isLoading: isLoadingFinished } = useQueryData('status2', () =>
    fetchEvents(TEXT.ALL, 2)
  )

  const isAnyLoading = isLoading || isLoadingProgress || isLoadingFinished

  return (
    <div className='home--page'>
      <>
        <Slide isLoading={isAnyLoading} data={progress} />
        <div className='mb-[60px]'>
          <Events
            isLoading={isAnyLoading}
            topTitle='進行中'
            title='開催予定・開催中のイベント'
            data={comingSoon}
          />
        </div>
        <Events
          isLoading={isAnyLoading}
          topTitle='終了した'
          title='終了したイベント'
          data={finished}
        />
      </>
    </div>
  )
}

export default Home
