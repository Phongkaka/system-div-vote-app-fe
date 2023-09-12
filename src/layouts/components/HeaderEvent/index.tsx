import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '~/layouts/components/Container'

import twitterLogo from '~/common/assets/images/tw-logo.png'
import menuHam from '~/common/assets/images/ic-menu.png'
import { useRecoilValue } from 'recoil'
import { eventDetail } from '~/recoil/atom'

interface Props {
  logoImg?: string | undefined
}

export default function HeaderEvent({ logoImg }: Props) {
  const [navbar, setNavbar] = useState(false)
  const event = useRecoilValue(eventDetail)

  return (
    <Container>
      <nav className='my-10 w-full rounded-lg bg-green shadow'>
        <div className='lg:max-w-8xl mx-auto justify-between px-4 md:flex md:items-center md:px-8'>
          <div>
            <div className='flex items-center justify-between'>
              <Link to='#' className='block h-[60px] py-[5px]'>
                <img className='h-full max-w-[250px]' src={logoImg} alt='logo' />
              </Link>
              <div className='md:hidden'>
                <button
                  className='rounded-md p-2 text-gray-700 outline-none'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <img src={menuHam} alt='menu ham' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`link-to-page mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='text-black-600 font-bold'>
                  <a href='#overview'>概要</a>
                </li>
                <li className='text-black-600 font-bold'>
                  <a href='#schedule'>スケジュール</a>
                </li>
                <li className='text-black-600 font-bold'>
                  <a href='#rule'>投票ルール</a>
                </li>
                <li className='text-black-600 font-bold'>
                  <a href='#reward'>プライズ</a>
                </li>
                <li className='text-black-600 font-bold'>
                  <Link to={`/events/${event?.slug}/vote`}>投票ページ</Link>
                </li>
                <li className='text-black-600 font-bold'>
                  <Link to='/feedback'>お問い合わせ</Link>
                </li>
                <li className='text-black-600 font-bold'>
                  <Link to='#'>
                    <img src={twitterLogo} alt='tw logo' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  )
}