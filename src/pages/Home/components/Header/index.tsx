import { useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { FEEDBACK_PAGE, LOGIN_PAGE, REGISTER_PAGE } from '~/constants/path'
import Container from '~/layouts/components/Container'
import { isLoggedInState, userInfo } from '~/recoil/atom/persistRecoil'
import { logout } from '~/services/api'

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)
  const navigate = useNavigate()
  const logoutMutation = useMutation(logout)
  const setUserInfo = useSetRecoilState(userInfo)

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync()
      setIsLoggedIn(false)
      setUserInfo({})
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  return (
    <Container>
      <nav className='my-10 w-full rounded-lg bg-green shadow'>
        <div className='lg:max-w-8xl mx-auto justify-between px-4 md:flex md:items-center md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:block md:py-3'>
              <Link to='#' className='block text-2xl font-bold text-black'>
                VOTE APP
              </Link>
              <div className='md:hidden'>
                <button
                  className='rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400'
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
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
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
                  <Link to='#'>Term of service</Link>
                </li>
                <li className='text-black-600 font-bold'>
                  <Link to={FEEDBACK_PAGE}>Contact</Link>
                </li>
                <li className='text-black-600 font-bold'>
                  <Link to={REGISTER_PAGE}>Sign Up</Link>
                </li>
                {!isLoggedIn ? (
                  <li className='text-black-600 font-bold'>
                    <Link to={LOGIN_PAGE}>Login</Link>
                  </li>
                ) : (
                  <li className='text-black-600 font-bold'>
                    <button type='button' onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  )
}
