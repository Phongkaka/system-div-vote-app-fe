interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
  classWrapper?: string
  showIcon?: boolean
}

const BaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  classWrapper,
  showIcon = true
}) => {
  const closeModal = () => {
    onClose?.()
  }

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className={`w-100 relative rounded-xl bg-white ${classWrapper}`}>
            {showIcon && (
              <button
                className='absolute right-2 top-2 text-gray-600 hover:text-gray-800'
                onClick={closeModal}
              >
                x
              </button>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default BaseModal
