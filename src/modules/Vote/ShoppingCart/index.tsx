import './style.scss'
import { ReactComponent as CloseIcon } from '~/common/assets/images/close.svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartState, totalState } from '~/recoil/atom/cart'
import { Product } from '~/models/cart'
import CartItem from './CartItem'
import { formatNumberWithCommas } from '~/utils/helper'
import { useCreateCheckoutSession } from '~/hook/useCreateCheckoutSession'
import { userInfo } from '~/recoil/atom/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DialogErrorPayment } from '~/components/Dialog'

interface Props {
  toggleCart?: () => void
}

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0)
}

const ShoppingCart = ({ toggleCart }: Props) => {
  const user = useRecoilValue(userInfo)
  const isAuthenticated = !!user?.access_token
  const [cartProducts, setCartProducts] = useRecoilState(cartState)
  const [totalPrice, setTotalPrice] = useRecoilState(totalState)
  const [isOpenErrorPayment, setIsOpenErrorPayment] = useState(false)
  const { mutate: createCheckoutSessionMutation, data, isError } = useCreateCheckoutSession()
  const navigate = useNavigate()

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(id)
    }
    if (id && quantity) {
      const updatedCart = cartProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
      setCartProducts(updatedCart)

      const newTotalPrice = calculateTotalPrice(updatedCart)
      setTotalPrice(newTotalPrice)
    }
  }

  const handleQuantityChangeInput = (id: number, quantity: number) => {
    if (id) {
      const updatedCart = cartProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
      setCartProducts(updatedCart)

      const newTotalPrice = calculateTotalPrice(updatedCart)
      setTotalPrice(newTotalPrice)
    }
  }

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id)
    setCartProducts(updatedCart)

    const newTotalPrice = calculateTotalPrice(updatedCart)
    setTotalPrice(newTotalPrice)
  }

  const handleClickBuy = () => {
    if (isAuthenticated) {
      const transformedArray = cartProducts.map((product) => {
        return {
          point_type_id: product.id,
          quantity: product.quantity
        }
      })
      if (transformedArray && transformedArray.length > 0) {
        const currentURL = window.location.href
        createCheckoutSessionMutation({
          items: transformedArray,
          redirect_url: `${currentURL}?session_id=`
        })
      }
    } else {
      navigate('/login')
    }
  }

  useEffect(() => {
    if (data && data?.url) {
      window.location.href = data?.url
    }
  }, [data])

  useEffect(() => {
    if (isError) {
      setIsOpenErrorPayment(true)
    }
  }, [isError])

  return (
    <>
      <div className='pl-150 pointer-events-none fixed inset-y-0 right-0 z-50 flex max-w-full'>
        <div className='pointer-events-auto w-screen max-w-md'>
          <div className='flex h-full flex-col bg-white shadow-xl'>
            <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={toggleCart}
                  className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                >
                  <CloseIcon />
                </button>
              </div>
              <div className='flex items-start justify-between'>
                <h2 className='text-lg font-bold text-gray-900' id='slide-over-title'>
                  ショッピングカート
                </h2>
              </div>
              <div className='mt-8'>
                <div className='flow-root'>
                  <ul role='list' className='-my-6'>
                    {cartProducts?.map((product: Product) => (
                      <CartItem
                        key={product.id}
                        product={product}
                        quantityChange={handleQuantityChange}
                        removeCart={handleRemoveFromCart}
                        handleQuantityChangeInput={handleQuantityChangeInput}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='px-4 py-6 sm:px-6'>
              <div className='flex justify-between text-base font-medium text-gray-900'>
                <p>小計</p>
                <p>{formatNumberWithCommas(totalPrice)}</p>
              </div>
              <div className='mt-6' onClick={handleClickBuy}>
                <p className='flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                  お支払いへ進む
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogErrorPayment
        isOpen={isOpenErrorPayment}
        setClose={() => setIsOpenErrorPayment(false)}
      />
    </>
  )
}

export default ShoppingCart
