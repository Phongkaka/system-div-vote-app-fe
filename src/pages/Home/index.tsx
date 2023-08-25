import Events from './components/EventEnd/Events'
import Carousel from '~/layouts/components/Carousel'
import { fetchEvents } from '~/services/eventApi'
import useQueryData from '~/hook/useQueryData'

function Home() {
  const { data: status0 } = useQueryData('status0', () => fetchEvents(0, 1))
  const { data: status1 } = useQueryData('status1', () => fetchEvents(1, 1))
  const { data: status2 } = useQueryData('status2', () => fetchEvents(2, 1))

  return (
    <div className='home--page'>
      {status0 && <Carousel data={status1?.data} />}
      {status2 && (
        <div className='mb-[60px]'>
          <Events
            topTitle='RECENTLY FINISHED'
            title='開催予定・開催中のイベント'
            data={status2?.data}
          />
        </div>
      )}
      {status0 && <Events topTitle='FINISHED' title='終了したイベント' data={status0?.data} />}
    </div>
  )
}

export default Home
