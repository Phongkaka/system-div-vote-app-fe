import { Product } from '~/models/cart'
import { formatNumberWithCommas } from '~/utils/helper'

interface Props {
  id: number
  logo?: string | undefined
  name?: string | undefined
  price: number
  promotion: number
  pointOriginal: number
  handleAddToCart: (product: Product) => void
}

const MenuBonus = ({ id, logo, name, price, promotion, pointOriginal, handleAddToCart }: Props) => {
  const handelClickButton = () => {
    handleAddToCart({
      id: id,
      price: price,
      logo: logo,
      name: name,
      quantity: 1
    })
  }

  return (
    <div className='mb-12 flex justify-center'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-[180px]'>
          <img src={logo} alt='bonus img' />
        </div>
        <div className='mt-3 flex w-full flex-wrap text-center'>
          <span className='name__item--bonus block w-full'>
            {name}{' '}
            <i className='pl-1 font-bold not-italic'>
              {Math.round(pointOriginal * (1 + promotion / 100))}票分【{promotion}% up】
            </i>
          </span>
          <span className='price__gift block w-full py-3 text-center'>
            {formatNumberWithCommas(price)}
          </span>
        </div>
        <button
          className='button-hover add-to-card rounded bg-black px-4 py-2 font-bold text-white'
          onClick={handelClickButton}
        >
          カートへ追加
        </button>
      </div>
    </div>
  )
}

export default MenuBonus
