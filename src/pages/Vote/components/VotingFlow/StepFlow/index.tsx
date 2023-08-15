import { useState } from 'react'
import IconQuestion from '~/common/assets/images/ic_question.svg'
import BaseModal from '~/components/BaseModal'
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
      <div className='step__flow rounded-3 relative flex w-[27%] flex-col items-center justify-center border-2 border-solid border-blue-500 p-[3%] py-[2%]'>
        <p className='absolute top-[-20px] rounded-[30px] bg-blue-500 px-[30px] py-1 text-lg font-semibold text-white'>
          STEP <span className='pl-[5px] text-lg font-semibold italic text-white'>{step}</span>
        </p>
        <div className='flex'>
          <p className='text-center text-lg font-semibold text-blue-500'>{text}</p>
          <button type='button' onClick={openModal}>
            <img className='ml-[5px] w-[30px]' src={IconQuestion} alt='question' />
          </button>
        </div>
      </div>
      <BaseModal isOpen={modalOpen} onClose={closeModal} classWrapper='p-4'>
        {/* Nội dung của modal */}
        <p>{titleModal}</p>
        <p>{contentStep}</p>
        <button className='text-gray-600 hover:text-gray-800' onClick={closeModal}>
          Close
        </button>
      </BaseModal>
    </>
  )
}

export default StepFlow
