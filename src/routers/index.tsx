import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Feedback from '~/pages/Feedback'
import { ROUTER } from '~/constants/path'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Vote'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))
const AboutEvent = lazy(() => import('~/pages/AboutEvent'))
const VoteResult = lazy(() => import('~/pages/VoteResult'))
const Vote = lazy(() => import('~/pages/Vote'))
const Account = lazy(() => import('~/pages/Account'))
const CandidateDetail = lazy(() => import('~/pages/CadidateDetail'))

const voteResult = false

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTER.HOME_PAGE,
        element: <Home />
      },
      {
        path: ROUTER.EVENT_PAGE,
        element: <Event />
      },
      {
        path: ROUTER.VOTE_PAGE,
        element: <Vote />
      },
      {
        path: ROUTER.LOGIN_PAGE,
        element: <Login />
      },
      {
        path: ROUTER.REGISTER_PAGE,
        element: <Register />
      },
      {
        path: ROUTER.ABOUT_PAGE,
        element: voteResult ? <VoteResult /> : <AboutEvent />
      },
      {
        path: ROUTER.ACCOUNT_PAGE,
        element: <Account />
      },
      {
        path: ROUTER.FEEDBACK_PAGE,
        element: <Feedback />
      },
      {
        path: ROUTER.CADIDATE_DETAIL,
        element: <CandidateDetail />
      }
    ]
  }
])

export default router
