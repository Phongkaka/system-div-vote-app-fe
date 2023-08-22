import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='bg-[#f8f8f8] p-5'>
      <p className='font-semibold text-[#1878b9]'>注意：</p>
      <ul className='list-disc px-5 py-5 lg:px-10'>
        <li className='mb-3 text-[#121212BF]'>
          発送状況に関しては投票券のみご購入された場合は発送はありませんので、常に未発送と表示されます。
          <p>※ 商品や通知に関しての発送はございません。</p>
        </li>
        <li className='mb-3 text-[#121212BF]'>
          投票券が発券中のまま投票券が発券されない場合は{' '}
          <Link
            to='#'
            className='border-b-[1px] border-[#1878b9] text-[#1878b9] hover:border-black hover:text-black'
          >
            こちら
          </Link>{' '}
          よりお問い合わせください。
          <p>※ 問い合わせ対応時間は平日 11:00～18:00 となります。</p>
        </li>
        <li className='mb-3 text-[#121212BF]'>
          過去ご購入頂いたイベントの投票券も表示されますが、終了済みのイベントに関しては投票できませんのでご注意ください。
        </li>
      </ul>
    </div>
  )
}

export default Profile
