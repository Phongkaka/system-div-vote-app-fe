import Container from '~/layouts/components/Container'
import AccountIcon from '~/common/assets/images/account.svg'
import Profile from './components/Profile'
import TablePayment from './components/TablePayment'
import { Link } from 'react-router-dom'

const fakeData = [
  {
    id: 1,
    menu: 'チャーム 10票分',
    quantity: 1,
    price: '¥1,100',
    purchaseDate: '08/04/2023',
    status: '成功'
  },
  {
    id: 2,
    menu: 'Example 2',
    quantity: 2,
    price: '¥2,200',
    purchaseDate: '08/05/2023',
    status: '成功'
  },
  {
    id: 3,
    menu: 'Example 3',
    quantity: 3,
    price: '¥3,300',
    purchaseDate: '08/06/2023',
    status: '成功'
  },
  {
    id: 4,
    menu: 'Example 4',
    quantity: 4,
    price: '¥4,400',
    purchaseDate: '08/07/2023',
    status: '成功'
  },
  {
    id: 5,
    menu: 'Example 5',
    quantity: 5,
    price: '¥5,500',
    purchaseDate: '08/08/2023',
    status: '成功'
  }
]

const Account = () => {
  return (
    <Container>
      <div className='mb-[50px]'>
        <h1 className='mb-2 text-4xl'>アカウント</h1>
        <img className='mr-[10px] inline-block w-[14px]' src={AccountIcon} alt='account' />
        <Link className='text inline-block items-center border-b-[1px] border-black text-sm' to='#'>
          ログアウト
        </Link>
      </div>
      <div className='flex flex-col-reverse gap-8 lg:flex-row'>
        <div className='lg:w-3/4'>
          <h2 className='mb-5 text-4xl'>購入履歴</h2>
          <div className='mb-10'>
            <Profile />
          </div>
          <TablePayment data={fakeData} />
        </div>
        <div className='account-detail flex-grow'>
          <h2 className='mb-5 text-4xl'>アカウントの詳細</h2>
          <p className='mb-2'>Tien Tran</p>
          <p>日本</p>
        </div>
      </div>
    </Container>
  )
}

export default Account
