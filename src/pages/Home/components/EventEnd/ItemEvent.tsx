import { Link } from 'react-router-dom'

interface Props {
  eventImg?: string | undefined
  linkPage: string | '#'
}
const ItemEvent = ({ eventImg, linkPage }: Props) => {
  return (
    <div className='h-fit'>
      <Link to={linkPage}>
        <img src={eventImg} className='h-[150px] w-full object-cover' alt='event' />
      </Link>
    </div>
  )
}

export default ItemEvent
