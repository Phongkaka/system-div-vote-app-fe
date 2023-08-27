import { Outlet, useLocation } from 'react-router-dom'
import Header from '~/pages/Home/components/Header'
import Footer from '~/pages/Home/components/Footer'
import HeaderEvent from '~/components/HeaderEvent'
import FooterEvent from '~/components/FooterEvent'
import { ROUTER } from '~/constants/path'

const MainLayout = () => {
  const location = useLocation()

  const isCustomHeaderFooter = [ROUTER.HOME_PAGE].includes(location.pathname)

  return (
    <>
      {isCustomHeaderFooter ? (
        <Header />
      ) : (
        <HeaderEvent logoImg='https://www.rankingmaster.jp/images/common/logo.svg' />
      )}
      <Outlet />
      {isCustomHeaderFooter ? <Footer /> : <FooterEvent />}
    </>
  )
}

export default MainLayout
