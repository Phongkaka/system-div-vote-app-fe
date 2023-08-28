import { Outlet, useLocation } from 'react-router-dom'
import Header from '~/pages/Home/components/Header'
import Footer from '~/pages/Home/components/Footer'
import HeaderEvent from '~/components/HeaderEvent'
import FooterEvent from '~/components/FooterEvent'
import { ROUTER } from '~/constants/path'
import { eventDetail } from '~/recoil/atom'
import { useRecoilValue } from 'recoil'

const MainLayout = () => {
  const location = useLocation()
  const event = useRecoilValue(eventDetail)

  const isCustomHeaderFooter = [ROUTER.HOME_PAGE].includes(location.pathname)

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
