import { Product } from '~/models/cart'
import { ReactComponent as RecycleBinIcon } from '~/common/assets/images/recycleBin.svg'
import { ReactComponent as PlusWhiteIcon } from '~/common/assets/images/plusWhite.svg'
import { ReactComponent as MinusWhiteIcon } from '~/common/assets/images/minusWhite.svg'
import { formatNumberWithCommas } from '~/utils/helper'

interface Props {
  product: Product
  quantityChange: (id: number, quantity: number) => void
  removeCart: (id: number) => void
  handleQuantityChangeInput: (id: number, quantity: number) => void
}

const CartItem = ({ product, quantityChange, removeCart, handleQuantityChangeInput }: Props) => {
  return (
    <li key={product.id} className='flex flex-col gap-5 py-6'>
      <div className='flex gap-4'>
        <div className='flex h-[150px] flex-1 justify-center border-gray-200'>
          <img src={product.logo} className='h-full' />
        </div>
        <div className='flex flex-1 items-center'>
          <div>
            <div className='flex justify-between text-base font-medium text-gray-900'>
              <h3 className='font-bold'>
                <p>{product.name}</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-between gap-4 text-sm'>
        <div className='flex flex-1 items-center justify-between rounded-lg border-[1px] border-dark p-1'>
          <button
            className='cursor-pointer rounded-lg bg-black p-3 duration-100 hover:bg-blue-500'
            onClick={() => quantityChange(product.id, product.quantity - 1)}
          >
            <MinusWhiteIcon />
          </button>
          <input
            className='w-16 appearance-none py-[5px] text-center text-lg outline-none'
            type='text'
            value={product.quantity}
            onChange={(e) => handleQuantityChangeInput(product.id, e.target.value as any)}
          />
          <button
            className='cursor-pointer rounded-lg bg-black p-3 duration-100 hover:bg-blue-500'
            onClick={() => quantityChange(product.id, product.quantity + 1)}
          >
            <PlusWhiteIcon />
          </button>
        </div>
        <div className='flex flex-1 items-center justify-between'>
          <p className='ml-4 text-lg font-normal'>
            {formatNumberWithCommas(product.price * product.quantity || 0)}
          </p>
          <RecycleBinIcon className='cursor-pointer' onClick={() => removeCart(product.id)} />
        </div>
      </div>
    </li>
  )
}

export default CartItem
