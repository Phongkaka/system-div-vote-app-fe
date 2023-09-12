import { Link } from 'react-router-dom'

interface Props {
  eventImg?: string | undefined
  linkPage: string | '#'
}
const ItemEvent = ({ eventImg, linkPage }: Props) => {
  return (
    <div className='h-fit'>
      <Link to={linkPage}>
        <img src={eventImg} className=' max-h-[230px] w-full align-top' alt='event' />
      </Link>
    </div>
  )
}

export default ItemEvent
