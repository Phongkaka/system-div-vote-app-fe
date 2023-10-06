import clsx from 'clsx'
import { Link } from 'react-router-dom'
import LoadingSkeleton from '~/components/LoadingSkeleton'

interface Props {
  img?: string | undefined
  linkPage: string | '#'
}
function Item({ img, linkPage }: Props) {
  return (
    <div className='item-slider w-full rounded-lg'>
      <Link to={linkPage}>
        <img src={img} alt='customer' className='rounded-lg' />
      </Link>
    </div>
  )
}

function LoadingItem({ className }: { className: string }) {
  return (
    <div className={clsx('item-slider w-full rounded-lg', className)}>
      <Link to={''}>
        <LoadingSkeleton className='loading-img h-[200px] w-full rounded-lg lg:h-[300px]' />
      </Link>
    </div>
  )
}

Item.LoadingItem = LoadingItem

export default Item
