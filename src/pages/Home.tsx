import Carousel from '~/layouts/components/Carousel'
import { fetchEvents } from '~/services/eventApi'
import useQueryData from '~/hook/useQueryData'
import Events from '~/modules/Home/EventEnd/Events'
import { TEXT } from '~/constants/path'

function Home() {
  const { data: comingSoon } = useQueryData('status0', () => fetchEvents(TEXT.ALL, 0))
  const { data: progress } = useQueryData('status1', () => fetchEvents(TEXT.ALL, 1))
  const { data: finished } = useQueryData('status2', () => fetchEvents(TEXT.ALL, 2))

  return (
    <div className='home--page'>
      {comingSoon && <Carousel data={comingSoon} />}
      {progress && (
        <div className='mb-[60px]'>
          <Events topTitle='進行中' title='開催予定・開催中のイベント' data={progress} />
        </div>
      )}
      {finished && <Events topTitle='終了した' title='終了したイベント' data={finished} />}
    </div>
  )
}

export default Home
