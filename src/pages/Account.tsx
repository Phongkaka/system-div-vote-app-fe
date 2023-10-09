import Container from '~/layouts/components/Container'
import AccountIcon from '~/common/assets/images/account.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isLoggedInState, userInfo } from '~/recoil/atom/auth'
import useQueryData from '~/hook/useQueryData'
import { FetchUseMe, purchaseHistory, voteHistory } from '~/services/userApi'
import Profile from '~/modules/Account/Profile'
import TablePayment from '~/modules/Account/TablePayment'
import { useState } from 'react'
import PillTabs from '~/components/PillTabs'
import { useMutation } from 'react-query'
import { logout } from '~/services/api'
import { cartState, totalState } from '~/recoil/atom/cart'
import { Helmet } from 'react-helmet'

const tabTables = [
  { id: 0, name: '購入履歴' },
  { id: 1, name: '投票履歴' }
]

const Account = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState)
  const navigate = useNavigate()
  const logoutMutation = useMutation(logout)
  const setUserInfo = useSetRecoilState(userInfo)
  const setCartState = useSetRecoilState(cartState)
  const setTotalState = useSetRecoilState(totalState)

  const userInfoData = useRecoilValue(userInfo)
  const { data: purchaseHistoryData, isLoading: isLoadingPurchase } = useQueryData(
    'purchaseHistory',
    purchaseHistory
  )
  const { data: voteHistoryData, isLoading: isLoadingVote } = useQueryData(
    'voteHistory',
    voteHistory
  )
  const { data: userMe } = useQueryData('useMe', FetchUseMe)
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (id: number) => {
    setActiveTab(id)
  }

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync()
      setIsLoggedIn(false)
      setUserInfo({})
      setCartState([])
      setTotalState(0)
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <Container>
      <Helmet>
        <title>アカウント</title>
      </Helmet>
      <div className='mb-[50px]'>
        <h1 className='mb-2 text-2xl font-bold'>アカウント</h1>
        <img className='mr-[10px] inline-block w-[14px]' src={AccountIcon} alt='account' />
        <Link
          className='text inline-block items-center border-b-[1px] border-black text-sm'
          to='#'
          onClick={handleLogout}
        >
          ログアウト
        </Link>
      </div>
      <div className='flex flex-col-reverse gap-14 lg:flex-row'>
        <div className='lg:w-3/4'>
          <h2 className='border-left mb-5 text-2xl text-[22px] font-bold'>購入履歴</h2>
          <div className='mb-10'>
            <Profile />
          </div>
          <div className='mb-5'>
            <PillTabs
              showAll={false}
              tabs={tabTables}
              onTabClick={handleTabClick}
              activeTab={activeTab}
            ></PillTabs>
          </div>
          {isLoadingPurchase || isLoadingVote ? (
            <TablePayment.Loading />
          ) : (
            <TablePayment
              dataPurchase={purchaseHistoryData || []}
              dataVote={voteHistoryData || []}
              tabTable={activeTab}
            />
          )}
        </div>
        <div className='account-detail flex-grow'>
          <h2 className='border-left mb-5 text-[22px] font-bold'>アカウントの詳細</h2>
          <p className='mb-2 text-lg font-bold'>{userInfoData?.data?.name}</p>
          <p className='mb-2 text-lg font-bold'>{userInfoData?.data?.email}</p>
          <span className='mb-2 text-lg font-bold'>現在のポイント:</span>{' '}
          <span className='text-lg text-pink'> {userMe?.point}</span>
          <p className='text-lg font-bold'>日本</p>
        </div>
      </div>
    </Container>
  )
}

export default Account
