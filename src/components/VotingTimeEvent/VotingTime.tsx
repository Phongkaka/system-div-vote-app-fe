import Countdown from '~/pages/Vote/components/CountDown'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { eventDetail } from '~/recoil/atom'

interface Props {
  isCountDown?: boolean
  targetDate?: Date
}

const targetDateDefault = new Date('2023-12-31T23:59:59')

const VotingTime = ({ isCountDown, targetDate }: Props) => {
  const event = useRecoilValue(eventDetail)
  return (
    <div className='flex flex-grow flex-col items-center justify-end lg:w-1/3'>
      <div className=' flex h-full w-full flex-col justify-end gap-10'>
        <h1 className='text-xl font-semibold lg:text-2xl'>ネクストヒロインプロジェクト</h1>
        <div className='flex'>
          <div className='flex w-1/3 items-center justify-center rounded-bl-lg rounded-tl-lg bg-black p-4'>
            <h2 className='text-lg text-white'>投票期間</h2>
          </div>

          <div className='200 flex flex-grow flex-col items-center rounded-br-lg rounded-tr-lg bg-white p-4'>
            <p className='text-base lg:text-lg'>2023/08/01 16:00</p>
            <span className='inline-block rotate-90 transform'>〜</span>
            <p className='text-base lg:text-lg'>2023/08/01 16:00</p>
          </div>
        </div>
        {isCountDown ? (
          <div>
            <h3 className='mb-4 rounded-lg bg-dark px-4 py-1 text-lg font-bold text-white'>
              WEB投票終了まであと
            </h3>
            <Countdown targetDate={targetDate || targetDateDefault} />
          </div>
        ) : (
          <Link
            className='flex h-[48px] w-full items-center justify-center rounded-lg bg-green text-sm font-semibold lg:text-lg'
            to={`/events/${event?.slug}/vote`}
          >
            投票する
          </Link>
        )}
      </div>
    </div>
  )
}

export default VotingTime
