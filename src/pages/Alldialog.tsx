import { useState } from 'react'
import BaseModal from '~/components/BaseModal'
import Container from '~/layouts/components/Container'

import ic_thanks from '~/common/assets/images/ic_tks.png'
import i_Vote from '~/common/assets/images/i_success_bonus.png'
import i_error from '~/common/assets/images/i_error.png'

const Alldialog = () => {
  // dialog Payment
  const [modalPaymentOpen, setModalPaymentOpen] = useState(false)
  const openModalPayment = () => {
    setModalPaymentOpen(true)
  }

  const closeModalPayment = () => {
    setModalPaymentOpen(false)
  }

  // dialog Payment succsess
  const [modalPaymentSuccessOpen, setModalPaymentSuccessOpen] = useState(false)
  const openModalPaymentSuccess = () => {
    setModalPaymentSuccessOpen(true)
  }

  const closeModalPaymentSuccess = () => {
    setModalPaymentSuccessOpen(false)
  }

  // dialog Payment errorr
  const [modalPaymentErrorOpen, setModalPaymentErrorOpen] = useState(false)
  const openModalPaymentError = () => {
    setModalPaymentErrorOpen(true)
  }

  const closeModalPaymentError = () => {
    setModalPaymentErrorOpen(false)
  }

  // dialog Vote errorr
  const [modalVoteErrorOpen, setModalVoteErrorOpen] = useState(false)
  const openModalVoteError = () => {
    setModalVoteErrorOpen(true)
  }

  const closeModalVoteError = () => {
    setModalVoteErrorOpen(false)
  }

  return (
    <>
      <button className='mr-5 border bg-slate-500' onClick={openModalPayment}>
        Click Payment
      </button>
      <button className='border bg-green' onClick={openModalPaymentSuccess}>
        Click Payment success
      </button>
      <button className='border bg-[red]' onClick={openModalPaymentError}>
        Click Payment Error
      </button>
      <button className='border bg-[blue]' onClick={openModalVoteError}>
        Click Vote Error
      </button>
      {/* confirm  payment*/}
      <BaseModal
        textBtn='投票する'
        isOpen={modalPaymentOpen}
        onClose={closeModalPayment}
        classWrapper='p-[50px]'
        isBtnTwo
      >
        <Container>
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
        </Container>
      </BaseModal>
      {/* dialog payment success */}
      <BaseModal
        isOpen={modalPaymentSuccessOpen}
        onClose={closeModalPaymentSuccess}
        classWrapper='p-[50px]'
      >
        <Container>
          <div className='flex flex-wrap justify-center'>
            <img className='mb-3' src={i_Vote} alt='Vote' />
          </div>
        </Container>
      </BaseModal>
      {/* dialog payment errorr */}
      <BaseModal
        isOpen={modalPaymentErrorOpen}
        onClose={closeModalPaymentError}
        classWrapper='p-[50px]'
      >
        <Container>
          <div className='flex flex-wrap justify-center'>
            <img className='mb-3' src={i_error} alt='errorr payment' />
            <h3 className='w-full py-5 text-center text-lg font-bold text-black'>
              決済に失敗しました。
            </h3>
            <p className='mb-10 text-sm text-black'>
              しばらく時間を置いてから、再度お試しください。
            </p>
          </div>
        </Container>
      </BaseModal>
      {/* dialog Vote error */}
      <BaseModal isOpen={modalVoteErrorOpen} onClose={closeModalVoteError} classWrapper='p-[50px]'>
        <Container>
          <div className='flex flex-wrap justify-center'>
            <img className='mb-3' src={i_error} alt='errorr payment' />
            <h3 className='w-full py-5 text-center text-lg font-bold text-black'>
              投票に失敗しました。
            </h3>
            <p className='mb-10 text-sm text-black'>
              しばらく時間を置いてから、再度お試しください。
            </p>
          </div>
        </Container>
      </BaseModal>
    </>
  )
}

export default Alldialog
