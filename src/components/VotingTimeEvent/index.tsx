import { Link } from 'react-router-dom'
import VotingTime from './VotingTime'

interface Props {
  banner?: string | undefined
  isCountDown?: boolean
  targetDate?: Date
  start_time?: Date
  end_time?: Date
}

function VotingTimeEvent({ banner, isCountDown, targetDate, start_time, end_time }: Props) {
  return (
    <div className='mb-10 flex flex-col gap-5 lg:flex-row lg:gap-8'>
      <div className='flex w-full flex-col items-center justify-end lg:w-[60%]'>
        <article className='flex w-full flex-col'>
          <Link to='#' className='hover:opacity-75'>
            <img className='h-full w-full rounded-xl object-cover xl:max-h-[400px]' src={banner} />
          </Link>
        </article>
      </div>
      <VotingTime
        isCountDown={isCountDown}
        targetDate={targetDate}
        start_time={start_time}
        end_time={end_time}
      />
    </div>
  )
}

export default VotingTimeEvent
