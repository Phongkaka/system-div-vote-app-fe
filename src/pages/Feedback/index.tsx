import Container from '~/layouts/components/Container'
import DefaultAccordion from './components/Accordion'
import FormFeedback from './components/FormFeedback'

const items = [
  {
    id: 1,
    title: 'クレジットカード以外の購入方法を知りたい',
    content: (
      <p className='leading-8'>
        現金での投票券購入はできません。
        <br />
        クレジットカードをお持ちでない方は、楽天ペイやLINEPay、デポジット型のバンドルカードやVプリカ等もお試しいただいております。
        <br />
        詳細は各種カード会社にご確認ください。
      </p>
    )
  },
  {
    id: 2,
    title: 'クレジットカード以外の購入方法を知りたい',
    content: (
      <p className='leading-8'>
        現金での投票券購入はできません。
        <br />
        クレジットカードをお持ちでない方は、楽天ペイやLINEPay、デポジット型のバンドルカードやVプリカ等もお試しいただいております。
        <br />
        詳細は各種カード会社にご確認ください。
      </p>
    )
  },
  {
    id: 3,
    title: 'クレジットカード以外の購入方法を知りたい',
    content: (
      <p className='leading-8'>
        現金での投票券購入はできません。
        <br />
        クレジットカードをお持ちでない方は、楽天ペイやLINEPay、デポジット型のバンドルカードやVプリカ等もお試しいただいております。
        <br />
        詳細は各種カード会社にご確認ください。
      </p>
    )
  },
  {
    id: 4,
    title: 'クレジットカード以外の購入方法を知りたい',
    content: (
      <p className='leading-8'>
        現金での投票券購入はできません。
        <br />
        クレジットカードをお持ちでない方は、楽天ペイやLINEPay、デポジット型のバンドルカードやVプリカ等もお試しいただいております。
        <br />
        詳細は各種カード会社にご確認ください。
      </p>
    )
  }
]

const Feedback = () => {
  return (
    <Container>
      <div className='mb-10'>
        <h1 className='mb-5 text-4xl'>よくあるご質問・お問い合わせ</h1>
        <p className='text-base text-[#121212BF]'>
          お問い合わせに先立ち、下記のよくあるご質問（FAQ）をご確認ください。
        </p>
      </div>
      <h2 className='mb-10 border-b-[2px] border-[#e9538a] pb-2 text-2xl font-light text-[#e9538a]'>
        よくあるご質問（FAQ）
      </h2>
      <DefaultAccordion items={items} title='支払いや投票券に関して' />
      <DefaultAccordion items={items} title='その他' />
      <h2 className='mb-10 border-b-[2px] border-[#e9538a] pb-2 text-2xl font-light text-[#e9538a]'>
        お問い合わせ
      </h2>
      <p className='mb-10 font-light leading-7'>
        お問い合わせフォームは、24時間受け付けております。
        <br />
        営業時間は平日11:00～18:00となります。
        <br />
        営業時間外に頂いたお問い合わせは翌営業日以降のご返信となる場合がございますので予めご了承ください。
      </p>
      <FormFeedback />
    </Container>
  )
}

export default Feedback
