import { Link } from 'react-router-dom'
import LoadingSkeleton from '~/components/LoadingSkeleton'

interface Props {
  eventImg?: string | undefined
  linkPage: string | '#'
}
const ItemEvent = ({ eventImg, linkPage }: Props) => {
  return (
    <div className='h-fit rounded-lg hover:opacity-80'>
      <Link to={linkPage}>
        <img
          src={eventImg}
          className='w-full rounded-lg border object-cover align-top lg:max-h-[230px]'
          alt='event'
        />
      </Link>
    </div>
  )
}

const LoadingItemEvent = () => {
  return (
    <div className='h-fit rounded-lg'>
      <LoadingSkeleton className='h-[150px] w-full lg:h-[230px]' />
    </div>
  )
}

ItemEvent.LoadingItemEvent = LoadingItemEvent

export default ItemEvent
