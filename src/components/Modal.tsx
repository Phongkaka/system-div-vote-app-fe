import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ReactComponent as CloseIcon } from '~/common/assets/images/close.svg'
import { useSpring, animated } from 'react-spring'

interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
  classWrapper?: string
  textBtn?: string
  isBtnTwo?: boolean
  disableButton?: boolean
}

const Modal = ({
  isOpen,
  onClose,
  children,
  classWrapper,
  textBtn,
  isBtnTwo,
  disableButton
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen)
  const modalRef = useRef<any>(null)

  const dialogSpring = useSpring({
    transform: isVisible ? 'scale(1)' : 'scale(0.7)',
    opacity: isVisible ? 1 : 0
  })

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen, setIsVisible])

  const closeModal = useCallback(() => {
    setIsVisible(false)
    onClose?.()
  }, [onClose, setIsVisible])

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal()
      }
    },
    [closeModal]
  )

  const handleEscKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      window.addEventListener('keydown', handleEscKeyPress)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
      window.removeEventListener('keydown', handleEscKeyPress)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      window.removeEventListener('keydown', handleEscKeyPress)
    }
  }, [isOpen, handleOutsideClick, handleEscKeyPress])

  return (
    <>
      {isOpen && (
        <div
          className='relative z-[999999999]'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
          <div className='fixed inset-0 z-[999999999] overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <animated.div
                style={{
                  ...dialogSpring
                }}
              >
                <div
                  ref={modalRef}
                  className={`
              relative transform overflow-hidden rounded-lg bg-white p-[25px] text-left shadow-xl transition-all sm:p-[50px]
              ${classWrapper}
              `}
                >
                  {disableButton && (
                    <div className='flex justify-end'>
                      <CloseIcon className='cursor-pointer' onClick={closeModal} />
                    </div>
                  )}
                  {children}
                  <div className='flex justify-center'>
                    {isBtnTwo && (
                      <button
                        className='button-hover mr-5 block h-[48px] w-[200px] rounded-lg border font-bold text-black'
                        onClick={closeModal}
                      >
                        閉じる
                      </button>
                    )}
                    {!disableButton && (
                      <button
                        className='button-hover mt-5 block h-[48px] w-[200px] rounded-lg bg-black font-bold text-white'
                        onClick={closeModal}
                      >
                        {textBtn || '閉じる'}
                      </button>
                    )}
                  </div>
                </div>
              </animated.div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
