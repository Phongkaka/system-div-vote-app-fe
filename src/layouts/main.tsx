import { Outlet, useLocation } from 'react-router-dom'
import Header from '~/pages/Home/components/Header'
import Footer from '~/pages/Home/components/Footer'
import { HOME_PAGE } from '~/constants/path'
import HeaderEvent from '~/components/HeaderEvent'
import FooterEvent from '~/components/FooterEvent'

const MainLayout = () => {
  const location = useLocation();

  const isCustomHeaderFooter = [HOME_PAGE].includes(location.pathname)

  return (
    <>
      {isCustomHeaderFooter ? <Header /> : <HeaderEvent />}
      <Outlet />
      {isCustomHeaderFooter ? <Footer /> : <FooterEvent />}
    </>
  )
}

export default MainLayout
