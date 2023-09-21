import { fetchEvents } from '~/services/eventApi'
import useQueryData from '~/hook/useQueryData'
import Events from '~/modules/Home/EventEnd/Events'
import { TEXT } from '~/constants/path'
import Slide from '../components/Slide/Slide'
import { COMINGSOON_STATUS, FINISHED_STATUS, PROGRESS_STATUS } from '~/constants/status'

function Home() {
  const { data: comingSoon, isLoading } = useQueryData('status0', () =>
    fetchEvents(TEXT.ALL, COMINGSOON_STATUS)
  )
  const { data: progress, isLoading: isLoadingProgress } = useQueryData('status1', () =>
    fetchEvents(TEXT.ALL, PROGRESS_STATUS)
  )
  const { data: finished, isLoading: isLoadingFinished } = useQueryData('status2', () =>
    fetchEvents(TEXT.ALL, FINISHED_STATUS)
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
