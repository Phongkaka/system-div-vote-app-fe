import clsx from 'clsx'
import LoadingSkeleton from '~/components/LoadingSkeleton'

interface Props {
  img?: string | undefined
}
function Item({ img }: Props) {
  return (
    <div className='item-slider w-full rounded-lg hover:opacity-80'>
      <img src={img} alt='customer' className='rounded-lg' />
    </div>
  )
}

function LoadingItem({ className }: { className: string }) {
  return (
    <div className={clsx('item-slider w-full rounded-lg', className)}>
      <LoadingSkeleton className='loading-img h-[200px] w-full rounded-lg lg:h-[300px]' />
    </div>
  )
}

Item.LoadingItem = LoadingItem

export default Item
