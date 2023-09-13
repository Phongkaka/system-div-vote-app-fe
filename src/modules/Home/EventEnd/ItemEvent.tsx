import { Link } from 'react-router-dom'

interface Props {
  eventImg?: string | undefined
  linkPage: string | '#'
}
const ItemEvent = ({ eventImg, linkPage }: Props) => {
  return (
    <div className='h-fit rounded-lg'>
      <Link to={linkPage}>
        <img
          src={eventImg}
          className=' max-h-[230px] w-full rounded-lg border align-top'
          alt='event'
        />
      </Link>
    </div>
  )
}

export default ItemEvent
