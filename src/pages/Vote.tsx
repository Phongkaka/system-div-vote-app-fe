import { useEffect, useState } from 'react'
import Container from '~/layouts/components/Container'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { eventDetail } from '~/recoil/atom'
import VotingTimeEvent from '~/components/VotingTimeEvent'
import { useNavigate, useParams } from 'react-router-dom'
import useEventDetails from '~/hook/useEventDetails'
import useQueryData from '~/hook/useQueryData'
import { fetchPointTypes } from '~/services/eventApi'
import { PointType } from '~/models/Events'
import { ReactComponent as CartIcon } from '~/common/assets/images/cart.svg'
import { Product } from '~/models/cart'
import { cartState, totalState } from '~/recoil/atom/cart'
import VotingFlow from '~/modules/Vote/VotingFlow'
import TabsVote from '~/modules/Vote/TabsVote'
import Title from '~/modules/Home/Title'
import MenuBonus from '~/modules/Vote/MenuBonus'
import ShoppingCart from '~/modules/Vote/ShoppingCart'
import { paymentPaid } from '~/services/payment'
import { DialogSuccess } from '~/components/Dialog'

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0)
}

function Vote() {
  const { slug } = useParams()
  const search = window.location.search
  const params = new URLSearchParams(search)
  const session_id = params.get('session_id')
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [cartProducts, setCartProducts] = useRecoilState(cartState)
  const [isShowDialogSuccess, setIsShowDialogSuccess] = useState(false)
  const setTotalPrice = useSetRecoilState(totalState)
  const navigate = useNavigate()
  // fetch api Point types
  const { data: listBonus } = useQueryData('pointTypes', () => fetchPointTypes())

  const [event, isLoadingEvent] = useEventDetails({ slug })
  const setEventDetail = useSetRecoilState(eventDetail)

  useEffect(() => {
    if (!event) return
    setEventDetail(event)
  }, [event, setEventDetail])

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(cartProducts)
    setTotalPrice(newTotalPrice)
  }, [cartProducts, setTotalPrice])

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }

  const handleAddToCart = async (productToAdd: Product) => {
    if (!isCartVisible) {
      setIsCartVisible(true)
    }
    const isProductInCart = cartProducts.some((product) => product.id === productToAdd.id)

    if (isProductInCart) {
      const updatedCart = cartProducts.map((product) =>
        product.id === productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product
      )
      setCartProducts(updatedCart)
    } else {
      const updatedCart = [...cartProducts, { ...productToAdd, quantity: 1 }]
      setCartProducts(updatedCart)
    }
  }

  useEffect(() => {
    if (session_id) {
      const fetchPaymentPaid = async () => {
        const data = await paymentPaid(session_id)
        if (data) {
          setIsShowDialogSuccess(true)
        }
      }
      fetchPaymentPaid()
    }
  }, [session_id])

  const handleCloseModalSuccess = () => {
    setIsShowDialogSuccess(false)
    navigate(`/events/${slug}/vote`)
  }

  return (
    <Container>
      <div>
        <div className='vote--page'>
          <div className='time__vote'>
            {isLoadingEvent ? (
              <VotingTimeEvent.Loading />
            ) : (
              <VotingTimeEvent
                banner={event?.banner}
                isCountDown
                start_time={event.start_time}
                end_time={event.end_time}
              />
            )}
          </div>
          <VotingFlow />
          <TabsVote />
          <div className='main__bonus mt-12'>
            <Title title='投票券メニュー' />
            <ul className='m-auto mt-12 grid w-10/12 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
              {listBonus?.map((item: PointType) => (
                <li className='flex justify-center' key={item.id}>
                  <MenuBonus
                    id={item.id}
                    logo={item.logo}
                    name={item.name}
                    price={item.price}
                    pointOriginal={item.point_original}
                    promotion={item.promotion}
                    handleAddToCart={handleAddToCart}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {cartProducts && cartProducts.length > 0 && (
          <button
            className='fixed bottom-14 right-0 z-50 rounded-lg bg-black p-3'
            onClick={toggleCart}
          >
            <CartIcon />
          </button>
        )}
      </div>
      {isCartVisible && <ShoppingCart toggleCart={toggleCart} />}
      <DialogSuccess isOpen={isShowDialogSuccess} setClose={handleCloseModalSuccess} />
    </Container>
  )
}

export default Vote
