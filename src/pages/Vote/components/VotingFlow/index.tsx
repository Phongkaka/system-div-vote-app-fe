import Title from '../Title'
import StepFlow from './StepFlow'

const contentStep = `
      電子投票券は画面下部の"投票券メニュー"より購入が可能です。
      注意：

      初回購入時はユーザー登録後に購入が可能となります。
      ログイン画面が表示される場合は、ユーザー登録時に入力した内容でログインしてください。
      支払い情報を入力し"今すぐ支払う"ボタンでご購入手続きを完了してください。
      注意：

      ご購入に際し入力いただく情報は決済に必要な情報になりますので、お間違いの無いようご注意ください。
      購入後の返品は受け付け致しかねますのでよくご確認の上ご購入ください。
      ご購入頂いたにも関わらず投票券が表示されない、購入履歴に表示されているが発券中の状態が続く場合は こちら よりお問い合わせください。
      購入しただけでは投票されませんのでご注意ください。
    `

const VotingFlow = () => {
  return (
    <div className='vote__flow'>
      <Title title='投票の流れ' />
      <div className='mx-auto my-[30px] flex justify-between'>
        <StepFlow
          step='1'
          text='投票券を購入する'
          titleModal='STEP1.投票券を購入する'
          contentStep={contentStep}
        />
        <StepFlow
          step='2'
          text='投票券のリンクを押す'
          titleModal='STEP2.投票券を購入する'
          contentStep={contentStep}
        />
        <StepFlow
          step='3'
          text='投票する'
          titleModal='STEP3.投票券を購入する'
          contentStep={contentStep}
        />
      </div>
    </div>
  )
}

export default VotingFlow
