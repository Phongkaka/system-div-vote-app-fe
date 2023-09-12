import { Outlet, useLocation } from 'react-router-dom'
import Footer from '~/layouts/components/Footer'
import { ROUTER } from '~/constants/path'
import { eventDetail } from '~/recoil/atom'
import { useRecoilValue } from 'recoil'
import Header from './components/Header'
import HeaderEvent from './components/HeaderEvent'
import FooterEvent from './components/FooterEvent'

const MainLayout = () => {
  const location = useLocation()
  const event = useRecoilValue(eventDetail)

  const isCustomHeaderFooter = [
    ROUTER.HOME_PAGE,
    ROUTER.LOGIN_PAGE,
    ROUTER.REGISTER_PAGE,
    ROUTER.ACCOUNT_PAGE,
    ROUTER.FEEDBACK_PAGE,
    ROUTER.FORGOT_PASSWORD,
    ROUTER.RESET_PASSWORD
  ].includes(location.pathname)

  return (
    <>
      {isCustomHeaderFooter ? <Header /> : <HeaderEvent logoImg={event?.logo} />}
      <Outlet />
      {isCustomHeaderFooter ? (
        <Footer />
      ) : (
        <FooterEvent logoImg={event?.logo} bannerImg={event?.banner} />
      )}
    </>
  )
}

export default MainLayout
