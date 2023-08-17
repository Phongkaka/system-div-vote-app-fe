import { Link } from 'react-router-dom'
import Title from '../Title'

function InforResult() {
  return (
    <div className='pt-12'>
      <Title title='お問い合わせ・個人情報について' />
      <p className='m-auto my-5 sm:w-11/12 xl:w-[1024px]'>
        ◆本オーディションは「NIGHT QUEEN
        グランプリ2023オーディション実行委員会」が主催、運営をしております <br />
        お問い合わせ・ご取材窓口お問合せについては、<Link to='#'>こちら</Link> から承ります。
        <br />
        尚、必要項目に記載がないご質問、選考基準や選考経過についてのご質問は返信致しかねます。
        <br />
        また、返信までお時間を頂戴する旨ご了承ください。
        <br />
        なお本イベントにおける個人情報の取り扱いについては、こちらの{' '}
        <Link to='#'>プライバシーポリシー</Link>
        をご覧ください
      </p>
    </div>
  )
}

export default InforResult
