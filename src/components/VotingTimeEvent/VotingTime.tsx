import moment from 'moment'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Countdown from '~/modules/Vote/CountDown'
import { eventDetail } from '~/recoil/atom'

interface Props {
  isCountDown?: boolean
  targetDate?: Date
  start_time?: Date
  end_time?: Date
}

const VotingTime = ({ isCountDown, start_time, end_time }: Props) => {
  const event = useRecoilValue(eventDetail)

  const formatTime = (inputDate: Date | undefined) => {
    if (inputDate) {
      const formattedDate = moment(inputDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY/MM/DD HH:mm')
      return formattedDate
    }
    return 'MM/DD/YYYY'
  }

  const targetDateCountDown = (end_time: Date | undefined) => {
    if (end_time) {
      return new Date(end_time)
    }
    return undefined
  }

  return (
    <div className='flex flex-grow flex-col items-center justify-end lg:w-1/3'>
      <div className=' flex h-full w-full flex-col justify-end gap-10'>
        <h1 className='text-xl font-semibold lg:text-2xl'>ネクストヒロインプロジェクト</h1>
        <div className='flex'>
          <div className='flex w-1/3 items-center justify-center rounded-bl-lg rounded-tl-lg bg-black p-4'>
            <h2 className='text-lg text-white'>投票期間</h2>
          </div>

          <div className='200 flex flex-grow flex-col items-center rounded-br-lg rounded-tr-lg bg-white p-4'>
            <p className='text-base lg:text-lg'>{formatTime(start_time)}</p>
            <span className='inline-block rotate-90 transform'>〜</span>
            <p className='text-base lg:text-lg'>{formatTime(end_time)}</p>
          </div>
        </div>
        {isCountDown ? (
          <div>
            <h3 className='mb-4 rounded-lg bg-dark px-4 py-1 text-lg font-bold text-white'>
              WEB投票終了まであと
            </h3>
            <Countdown targetDate={targetDateCountDown(end_time) || new Date()} />
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
