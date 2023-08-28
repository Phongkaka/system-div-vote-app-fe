import { useEffect, useState } from 'react'
import VotingFlow from './components/VotingFlow'
import { TabsVote } from './components/TabsVote'
import MenuBonus from './components/MenuBonus'
import Title from './components/Title'
import ShoppingCart from './components/ShoppingCart'
import Container from '~/layouts/components/Container'
import { useQuery } from 'react-query'
import { fetchCadidates } from '~/services/cadidatesAPI'
import { Cadidates, ParamCadidate } from '~/models/cadidates'
import { useSetRecoilState } from 'recoil'
import { cadidates } from '~/recoil/atom'
import VotingTimeEvent from '~/components/VotingTimeEvent'
import { useParams } from 'react-router-dom'
import useEventDetails from '~/hook/useEventDetails'
import useQueryData from '~/hook/useQueryData'
import { fetchPointTypes } from '~/services/eventApi'
import { PointType } from '~/models/Events'

const param: ParamCadidate = {
  filter: {
    where: {},
    order: {},
    limit: 0
  }
}
function Vote() {
  const { slug } = useParams()
  const [isCartVisible, setIsCartVisible] = useState(false)
  // fetch api Point types
  const { data: listBonus } = useQueryData('pointTypes', () => fetchPointTypes())

  const { data } = useQuery<Cadidates>(['cadidate', param], () => fetchCadidates(param))
  const setCadidateList = useSetRecoilState(cadidates)
  const event = useEventDetails({ slug })

  useEffect(() => {
    if (!data) return
    setCadidateList(data)
  }, [data, setCadidateList])

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }

  return (
    <Container>
      <div>
        <div className='vote--page'>
          <div className='time__vote'>
            <VotingTimeEvent banner={event?.banner} isCountDown />
          </div>
          <VotingFlow />
          <TabsVote />
          <div className='main__bonus mt-12'>
            <Title title='投票券メニュー' />
            <ul className='m-auto mt-12 grid w-10/12 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
              {listBonus?.map((item: PointType) => (
                <li className='flex justify-center' key={item.id}>
                  <MenuBonus
                    logo={item.logo}
                    name={item.name}
                    price={item.price}
                    pointOriginal={item.point_original}
                    promotion={item.promotion}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className='fixed right-0 top-1/2 bg-blue-500' onClick={toggleCart}>
          click me
        </button>
      </div>
      {isCartVisible && <ShoppingCart toggleCart={toggleCart} />}
    </Container>
  )
}

export default Vote
