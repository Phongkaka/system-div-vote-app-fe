import { useState } from 'react'
import Banner from '~/layouts/components/Banner'
import BannerVote from '~/common/assets/images/event-01.jpg'
import Countdown from './components/CountDown'
import VotingFlow from './components/VotingFlow'
import { TabsVote } from './components/TabsVote'
import MenuBonus from './components/MenuBonus'
import Title from './components/Title'
import ShoppingCart from './components/ShoppingCart'

const targetDate = new Date('2023-12-31T23:59:59')

function Vote() {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }

  return (
    <>
      <div>
        <div className='vote--page'>
          <Banner img={BannerVote} />
          <div className='time__vote'>
            <h2 className='mx-auto mb-2 block text-center text-3xl font-bold text-pink'>
              投票開催中！
            </h2>
            <span className='block text-center text-2xl font-bold text-pink'>
              2023年08月01日(火) 16:00〜2023年09月30日(土) 19:00
            </span>
            <div className='countdown_box my-7 border border-pink p-8'>
              <p className='text-center text-2xl'>
                <span className='border-b border-pink text-pink'>WEB投票終了まであと</span>
              </p>
              <Countdown targetDate={targetDate} />
            </div>
          </div>
          <VotingFlow />
          <TabsVote />
          <div className='main__bonus mt-12'>
            <Title title='投票券メニュー' />
            <ul className='m-auto mt-12 grid w-10/12 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
              <li className='flex justify-center '>
                <MenuBonus />
              </li>
              <li className='flex justify-center'>
                <MenuBonus />
              </li>
              <li className='flex justify-center'>
                <MenuBonus />
              </li>
              <li className='flex justify-center'>
                <MenuBonus />
              </li>
              <li className='flex justify-center'>
                <MenuBonus />
              </li>
            </ul>
          </div>
        </div>
        <button className='fixed right-0 top-1/2 bg-blue-500' onClick={toggleCart}>
          click me
        </button>
      </div>
      {isCartVisible && <ShoppingCart toggleCart={toggleCart} />}
    </>
  )
}

export default Vote
