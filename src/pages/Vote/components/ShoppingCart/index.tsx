import './style.scss'
// interface Props {
//   title?: string | undefined
// }

const ShoppingCart = () => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <div className='pointer-events-auto w-screen max-w-md'>
              <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <h2 className='text-lg font-medium text-gray-900' id='slide-over-title'>
                      ショッピングカート
                    </h2>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                      >
                        <span className='absolute -inset-0.5' />
                        <span className='sr-only'>Close panel</span>
                        <svg
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <div className='flow-root'>
                      <ul role='list' className='-my-6 divide-y divide-gray-200'>
                        <li className='flex py-6'>
                          <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
                              alt='Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
                              className='h-full w-full object-cover object-center'
                            />
                          </div>
                          <div className='ml-4 flex flex-1 flex-col'>
                            <div>
                              <div className='flex justify-between text-base font-medium text-gray-900'>
                                <h3>
                                  <a href='#'>シャンパンハーフ 113票分【13% up】</a>
                                </h3>
                                <p className='ml-4'>$32.00</p>
                              </div>
                            </div>
                            <div className='flex flex-1 items-end justify-between text-sm'>
                              <div className='flex items-center border-gray-100'>
                                <button className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                                  {' '}
                                  -{' '}
                                </button>
                                <input
                                  className='w-16 appearance-none border bg-white py-[5px] text-center text-xs outline-none'
                                  type='number'
                                  value='2'
                                  min='0'
                                />
                                <button className='cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                                  {' '}
                                  +{' '}
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* More products... */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                  <div className='flex justify-between text-base font-medium text-gray-900'>
                    <p>小計</p>
                    <p>¥15,400</p>
                  </div>
                  <div className='mt-6'>
                    <a
                      href='#'
                      className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                    >
                      お支払いへ進む
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
