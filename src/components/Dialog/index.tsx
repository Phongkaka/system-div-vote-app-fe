import { ReactElement } from 'react'
import i_Vote from '~/common/assets/images/i_success_bonus.png'
import ic_thanks from '~/common/assets/images/ic_tks.png'
import i_error from '~/common/assets/images/i_error.png'
import Modal from '../Modal'

interface Props {
  setClose?: any
  isOpen: boolean
  children?: ReactElement
  textBtn?: string
  isBtnTwo?: boolean
}

const Dialog = ({ setClose, isOpen, children, textBtn, isBtnTwo }: Props) => {
  const closeModal = () => {
    setClose(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      classWrapper='w-full lg:w-[1024px]'
      textBtn={textBtn}
      isBtnTwo={isBtnTwo}
    >
      {children}
    </Modal>
  )
}

const DialogSuccess = (props: Props) => {
  return (
    <Dialog {...props}>
      <div className='flex flex-wrap justify-center'>
        <img className='mb-3' src={i_Vote} alt='Vote' />
      </div>
    </Dialog>
  )
}

const DialogConfirmPayment = (props: Props) => {
  return (
    <Dialog textBtn='投票する' {...props} isBtnTwo={true}>
      <div className='flex flex-wrap justify-center'>
        <img src={ic_thanks} alt='thank you' />
        <h3 className='w-full py-5 text-center text-lg font-bold text-black'>
          決済が完了しました。
        </h3>
        <span className='block w-full text-center text-sm text-black'>
          ご購入いただき、ありがとうございます。
        </span>
        <span className='block w-full pb-10 text-center text-sm text-black'>
          ご確認のメールをお送りしましたので、ご確認ください。
        </span>
      </div>
    </Dialog>
  )
}

const DialogErrorPayment = (props: Props) => {
  return (
    <Dialog {...props}>
      <div className='flex flex-wrap justify-center'>
        <img className='mb-3' src={i_error} alt='errorr payment' />
        <h3 className='w-full py-5 text-center text-lg font-bold text-black'>
          決済に失敗しました。
        </h3>
        <p className='mb-10 text-sm text-black'>しばらく時間を置いてから、再度お試しください。</p>
      </div>
    </Dialog>
  )
}

const DialogVoteError = (props: Props) => {
  return (
    <Dialog {...props}>
      <div className='flex flex-wrap justify-center'>
        <img className='mb-3' src={i_error} alt='errorr payment' />
        <h3 className='w-full py-5 text-center text-lg font-bold text-black'>
          投票に失敗しました。
        </h3>
      </div>
    </Dialog>
  )
}

export { DialogSuccess, DialogConfirmPayment, DialogErrorPayment, DialogVoteError }
