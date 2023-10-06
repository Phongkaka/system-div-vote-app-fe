import { fetchEvents } from '~/services/eventApi'
import useQueryData from '~/hook/useQueryData'
import Events from '~/modules/Home/EventEnd/Events'
import { TEXT } from '~/constants/path'
import Slide from '../components/Slide/Slide'
import { COMING_SOON_STATUS, FINISHED_STATUS, PROGRESS_STATUS } from '~/constants/status'

function Home() {
  const { data: comingSoon, isLoading: isLoadingComingSoon } = useQueryData('comingSoon', () =>
    fetchEvents(TEXT.ALL, COMING_SOON_STATUS)
  )
  const { data: progress, isLoading: isLoadingProgress } = useQueryData('progress', () =>
    fetchEvents(TEXT.ALL, PROGRESS_STATUS)
  )
  const { data: finished, isLoading: isLoadingFinished } = useQueryData('finished', () =>
    fetchEvents(TEXT.ALL, FINISHED_STATUS)
  )

  const isAnyLoading = isLoadingComingSoon || isLoadingProgress || isLoadingFinished

  return (
    <div className='home--page min-h-[421px]'>
      <Slide isLoading={isAnyLoading} data={progress} />
      <div className='mb-[60px] mt-10'>
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
    </div>
  )
}

export default Home
