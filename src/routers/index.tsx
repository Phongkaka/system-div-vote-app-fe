import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { ROUTER } from '~/constants/path'
import { eventDetail } from '~/recoil/atom'
import { userInfo } from '~/recoil/atom/auth'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Vote'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))
const AboutEvent = lazy(() => import('~/pages/AboutEvent'))
const VoteResult = lazy(() => import('~/pages/VoteResult'))
const Vote = lazy(() => import('~/pages/Vote'))
const Account = lazy(() => import('~/pages/Account'))
const Feedback = lazy(() => import('~/pages/Feedback'))
const AllDialog = lazy(() => import('~/pages/Alldialog'))

const AppRouter = () => {
  const user = useRecoilValue(userInfo)
  const event = useRecoilValue(eventDetail)
  const isAuthenticated = !!user?.access_token
  const voteResult = event.status === 2

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTER.HOME_PAGE} element={<Home />} />
        <Route path={ROUTER.EVENT_PAGE} element={<Event />} />
        <Route path={ROUTER.VOTE_PAGE} element={<Vote />} />
        <Route path={ROUTER.LOGIN_PAGE} element={<Login />} />
        <Route path={ROUTER.REGISTER_PAGE} element={<Register />} />
        <Route path='all-dialog' element={<AllDialog />} />
        <Route path={ROUTER.ABOUT_PAGE} element={voteResult ? <VoteResult /> : <AboutEvent />} />
        <Route
          path={ROUTER.ACCOUNT_PAGE}
          element={isAuthenticated ? <Account /> : <Navigate to={ROUTER.LOGIN_PAGE} />}
        />
        <Route path={ROUTER.FEEDBACK_PAGE} element={<Feedback />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
