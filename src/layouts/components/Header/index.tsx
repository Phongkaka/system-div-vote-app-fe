import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ROUTER } from '~/constants/path'
import Container from '~/layouts/components/Container'
import { isLoggedInState, userInfo } from '~/recoil/atom/auth'
import { logout } from '~/services/api'
import menuHam from '~/common/assets/images/ic-menu.png'
import { ReactComponent as AvatarNoneIcon } from '~/common/assets/images/avatar_none.svg'
import { cartState, totalState } from '~/recoil/atom/cart'
import { ReactComponent as LogoutIcon } from '~/common/assets/images/logout_icon.svg'

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)
  const navigate = useNavigate()
  const logoutMutation = useMutation(logout)
  const setUserInfo = useSetRecoilState(userInfo)
  const setCartState = useSetRecoilState(cartState)
  const setTotalState = useSetRecoilState(totalState)

  const userInfoData = useRecoilValue(userInfo)

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync()
      setIsLoggedIn(false)
      setUserInfo({})
      setCartState([])
      setTotalState(0)
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const location = useLocation()

  const isHome = [ROUTER.HOME_PAGE].includes(location.pathname)

  useEffect(() => {
    setNavbar(false)
  }, [location.pathname])

  return (
    <Container className={isHome ? `w-[90%]` : ''}>
      <nav className='my-10 w-full rounded-lg bg-green shadow'>
        <div className='lg:max-w-8xl mx-auto justify-between px-4 md:flex md:items-center md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:block md:py-3'>
              <Link to='/' className='block text-2xl font-bold text-black'>
                VOTE APP
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
                  <Link to='#'>サービス期間</Link>
                </li>
                <li className='text-black-600 font-bold'>
                  <Link to={ROUTER.FEEDBACK_PAGE}>接触</Link>
                </li>

                {!isLoggedIn ? (
                  <>
                    <li className='text-black-600 block font-bold'>
                      <Link to={ROUTER.REGISTER_PAGE}>サインアップ</Link>
                    </li>
                    <li className='text-black-600 block font-bold'>
                      <Link to={ROUTER.LOGIN_PAGE}>ログイン</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className='text-black-600 block font-bold md:hidden'>
                      <Link to={ROUTER.ACCOUNT_PAGE}>プロフィール</Link>
                    </li>
                    <li className='text-black-600 block font-bold md:hidden'>
                      <button type='button' onClick={handleLogout}>
                        ログアウト
                      </button>
                    </li>
                    <li className='text-black-600 hidden font-bold md:block'>
                      <div
                        className='group relative'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <span className='block cursor-pointer rounded-lg bg-black p-1'>
                          <AvatarNoneIcon className='bg-black' />
                        </span>
                        {isHovered && (
                          <div
                            className='0 absolute right-[-35px] top-12 z-10 mt-2 w-40
                          space-y-2
                         rounded-lg bg-black py-4 text-white shadow-lg before:absolute before:top-[-25px] before:block before:h-10 before:w-full before:bg-transparent'
                          >
                            <p className='flex w-full items-center border-b-[1px] border-dark px-4 pb-1 font-light'>
                              {userInfoData?.data?.name}
                            </p>
                            <Link
                              className='flex w-full items-center px-4 font-light hover:text-green'
                              to={ROUTER.ACCOUNT_PAGE}
                            >
                              プロフィール
                            </Link>
                            <button
                              className='flex w-full items-center px-4 font-light hover:text-green'
                              type='button'
                              onClick={handleLogout}
                            >
                              ログアウト
                              <LogoutIcon className='ml-5' />
                            </button>
                          </div>
                        )}
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  )
}
