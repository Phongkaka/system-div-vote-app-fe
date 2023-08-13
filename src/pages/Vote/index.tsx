import Banner from "~/layouts/components/Banner"
import Container from "~/layouts/components/Container"
import BannerVote from "~/common/assets/images/event-01.jpg"
import CountDown from "./CountDown"

function Vote() {
  const targetDate = new Date('2023-12-31T23:59:59');

  return (
    <Container>
      <div className='vote--page'>
        <Banner img={BannerVote} />
        <div className="time__vote">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-2">投票開催中！</h2>
          <span className="text-[#fc2e9e] font-bold block text-center text-2xl">2023年08月01日(火) 16:00〜2023年09月30日(土) 19:00</span>
          <div className="countdown_box border border-[#fc2e9e] my-7 p-8">
            <p className="text-center text-2xl">
              <span className="border-b border-[#fc2e9e] text-[#fc2e9e]">WEB投票終了まであと</span>
            </p>
            <CountDown targetDate={targetDate} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Vote