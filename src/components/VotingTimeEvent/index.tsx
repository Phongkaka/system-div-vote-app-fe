import { Link } from 'react-router-dom'
import VotingTime from './VotingTime'

interface Props {
  banner?: string | undefined
}

function VotingTimeEvent({ banner }: Props) {
  return (
    <div className='mb-10 flex flex-col gap-5 lg:flex-row lg:gap-8'>
      <div className='flex w-full flex-col items-center lg:w-[60%]'>
        <article className='flex w-full flex-col'>
          <Link to='#' className='hover:opacity-75'>
            <img className='w-full rounded-xl object-cover xl:max-h-[400px]' src={banner} />
          </Link>
        </article>
      </div>
      <VotingTime />
    </div>
  )
}

export default VotingTimeEvent
