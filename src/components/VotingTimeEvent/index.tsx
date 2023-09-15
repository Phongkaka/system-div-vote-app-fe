import { Link } from 'react-router-dom'
import VotingTime from './VotingTime'
import LoadingSkeleton from '../LoadingSkeleton'

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

function Loading() {
  return (
    <div className='mb-10 flex flex-col gap-3 lg:flex-row lg:gap-8'>
      <div className='flex w-full flex-col items-center justify-end lg:w-[60%]'>
        <article className='flex w-full flex-col'>
          <LoadingSkeleton className='h-[150px] w-full lg:h-[300px]' />
        </article>
      </div>
      <div className='flex h-[200px] flex-col justify-between lg:h-[300px] lg:w-[40%]'>
        <LoadingSkeleton className='h-[30px]' />
        <LoadingSkeleton className='h-[70px] lg:h-[100px]' />
        <LoadingSkeleton className='h-[50px] lg:h-[70px]' />
      </div>
    </div>
  )
}

VotingTimeEvent.Loading = Loading

export default VotingTimeEvent
