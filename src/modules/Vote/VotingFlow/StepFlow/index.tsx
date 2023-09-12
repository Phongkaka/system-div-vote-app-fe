import { useState } from 'react'
import { ReactComponent as IconQuestion } from '~/common/assets/images/ic_question.svg'
import Modal from '~/components/Modal'
interface Props {
  step?: string | undefined
  text?: string | undefined
  titleModal?: string | undefined
  contentStep?: string | undefined
}
const StepFlow = ({ step, text, titleModal, contentStep }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <>
      <div className='step__flow flex w-full flex-col items-start justify-center gap-5 rounded-lg bg-white p-6 py-5 lg:w-[28%]'>
        <p className=' py-1 text-lg font-semibold text-green_text'>ステップ 0{step}</p>
        <div className='flex'>
          <p className='text-center text-lg font-semibold'>{text}</p>
          <IconQuestion onClick={openModal} className='ml-3 w-[30px] cursor-pointer' />
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} classWrapper='lg:w-[1024px]'>
        <div>
          <span className='block pb-2 text-[18px] font-bold uppercase text-green'>STEP {step}</span>
          <h3 className='pb-10 text-2xl font-bold text-black'>{titleModal}</h3>
          <p className='pb-12 text-base text-black'>{contentStep}</p>
        </div>
      </Modal>
    </>
  )
}

export default StepFlow
