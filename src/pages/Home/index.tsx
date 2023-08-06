import Banner from '~/components/Banner'
import Events from './components/EventEnd/Events'

function Home() {
  return (
    <div className='home--page'>
      {/*  */}
      <Banner></Banner>
      <Banner></Banner>
      {/*  */}

      <Events></Events>
    </div>
  )
}

export default Home
