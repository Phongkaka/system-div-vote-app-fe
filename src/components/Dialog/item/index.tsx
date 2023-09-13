import { Link } from 'react-router-dom'

interface Props {
  img?: string | undefined
  linkPage: string | '#'
}
function Item({ img, linkPage }: Props) {
  return (
    <div className='item-slider mb-10 w-full rounded-lg'>
      <Link to={linkPage} target='_blank' rel='noreferrer'>
        <img src={img} alt='customer' className='rounded-lg' />
      </Link>
    </div>
  )
}

export default Item
