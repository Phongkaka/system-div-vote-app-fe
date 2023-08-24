import Events from './components/EventEnd/Events'
import Carousel from '~/layouts/components/Carousel'
import { fetchEvents } from '~/services/api'
import { useQuery } from 'react-query'

function Home() {
  const page = 1
  const { data: status0 } = useQuery(['events', 0, page], () => fetchEvents(0, page))
  const { data: status1 } = useQuery(['events', 1, page], () => fetchEvents(1, page))
  const { data: status2 } = useQuery(['events', 2, page], () => fetchEvents(2, page))

  return (
    <>
      <div className='home--page'>
        <Carousel data={status0} />
        <div className='mb-[60px]'>
          <Events topTitle='RECENTLY FINISHED' title='開催予定・開催中のイベント' data={status0} />
        </div>
        <Events topTitle='FINISHED' title='終了したイベント' data={status0} />
      </div>
    </>
  )
}

export default Home
