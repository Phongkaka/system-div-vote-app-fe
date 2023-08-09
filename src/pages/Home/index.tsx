import Banner from '~/components/Banner'
import Events from './components/EventEnd/Events'
import Container from '~/components/Container'

function Home() {
  return (
    <Container>
      <div className='home--page'>
        {/*  */}
        <h3 className='pb-5'>開催予定・開催中のイベント</h3>
        <Banner />
        {/*  */}

        <Events></Events>
      </div>
    </Container>
  )
}

export default Home
