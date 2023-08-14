import React from 'react'
import IconQuestion from '~/common/assets/images/ic_question.svg'
interface Props {
  step?: string | undefined
  text?: string | undefined
  titleModal?: string | undefined
  contentStep?: string | undefined
}
const StepFlow = ({ step, text, titleModal, contentStep }: Props) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <div className='step__flow rounded-3 relative flex w-[27%] flex-col items-center justify-center border-2 border-solid border-blue-500 p-[3%] py-[2%]'>
        <p className='absolute top-[-20px] rounded-[30px] bg-blue-500 px-[30px] py-1 text-lg font-semibold text-white'>
          STEP <span className='pl-[5px] text-lg font-semibold italic text-white'>{step}</span>
        </p>
        <div className='flex'>
          <p className='text-center text-lg font-semibold text-blue-500'>{text}</p>
          <button type='button' onClick={() => setShowModal(true)}>
            <img className='ml-[5px] w-[30px]' src={IconQuestion} alt='question' />
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div className='relative mx-auto my-6 w-auto max-w-3xl'>
              {/*content*/}
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5'>
                  <h3 className='text-3xl font-semibold'>{titleModal}</h3>
                  <button
                    className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative flex-auto p-6'>
                  <p className='my-4 text-lg leading-relaxed text-slate-500'>{contentStep}</p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6'>
                  <button
                    className='mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </>
      ) : null}
    </>
  )
}

export default StepFlow
