import React from 'react'
import { ReactComponent as CloseIcon } from '~/common/assets/images/close.svg'

interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
  classWrapper?: string
  textBtn?: string
  isBtnTwo?: boolean
  disableButton?: boolean
}

const BaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  classWrapper,
  textBtn,
  isBtnTwo,
  disableButton
}) => {
  const closeModal = () => {
    onClose?.()
  }

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className={`w-100 relative rounded-xl bg-white ${classWrapper}`}>
            {disableButton && (
              <div className='flex justify-end'>
                <CloseIcon className='cursor-pointer' onClick={closeModal} />
              </div>
            )}
            {children}
            <div className='flex justify-center'>
              {isBtnTwo && (
                <button
                  className='mr-5 block h-[48px] w-[200px] rounded-lg border font-bold text-black'
                  onClick={closeModal}
                >
                  閉じる
                </button>
              )}

              {!disableButton && (
                <button
                  className='block h-[48px] w-[200px] rounded-lg bg-black font-bold text-white'
                  onClick={closeModal}
                >
                  {textBtn || '閉じる'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BaseModal
