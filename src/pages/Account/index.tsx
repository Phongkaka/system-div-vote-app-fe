import Container from '~/layouts/components/Container'
import AccountIcon from '~/common/assets/images/account.svg'
import Profile from './components/Profile'
import TablePayment from './components/TablePayment'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userInfo } from '~/recoil/atom/persistRecoil'
import useQueryData from '~/hook/useQueryData'
import { purchaseHistory } from '~/services/userApi'

const Account = () => {
  const userInfoData = useRecoilValue(userInfo)
  const { data: purchaseHistoryData } = useQueryData('purchaseHistory', purchaseHistory)

  return (
    <Container>
      <div className='mb-[50px]'>
        <h1 className='mb-2 text-2xl font-bold'>アカウント</h1>
        <img className='mr-[10px] inline-block w-[14px]' src={AccountIcon} alt='account' />
        <Link className='text inline-block items-center border-b-[1px] border-black text-sm' to='#'>
          ログアウト
        </Link>
      </div>
      <div className='flex flex-col-reverse gap-14 lg:flex-row'>
        <div className='lg:w-3/4'>
          <h2 className='border-left mb-5 text-2xl text-[22px] font-bold'>購入履歴</h2>
          <div className='mb-10'>
            <Profile />
          </div>
          <TablePayment data={purchaseHistoryData} />
        </div>
        <div className='account-detail flex-grow'>
          <h2 className='border-left mb-5 text-[22px] font-bold'>アカウントの詳細</h2>
          <p className='mb-2 text-lg font-bold'>{userInfoData?.data?.name}</p>
          <p className='text-lg font-bold'>日本</p>
        </div>
      </div>
    </Container>
  )
}

export default Account
