import Carousel from '~/components/Banner'
import Events from './components/EventEnd/Events'
import Container from '~/components/Container'

function Home() {
  return (
    <Container>
      <div className='home--page'>
        {/*  */}
        <Carousel title='開催予定・開催中のイベント' />
        <Carousel title='最近終了したイベント' />
        {/*  */}

        <Events></Events>
      </div>
    </Container>
  )
}

export default Home
