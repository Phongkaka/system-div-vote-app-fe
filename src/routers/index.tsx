import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Feedback from '~/pages/Feedback'
import {
  ABOUT_PAGE,
  ACCOUNT_PAGE,
  EVENT_PAGE,
  FEEDBACK_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  VOTE_PAGE
} from '~/constants/path'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Vote'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))
const AboutEvent = lazy(() => import('~/pages/AboutEvent'))
const VoteResult = lazy(() => import('~/pages/VoteResult'))
const Vote = lazy(() => import('~/pages/Vote'))
const Account = lazy(() => import('~/pages/Account'))

const voteResult = false

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: HOME_PAGE,
        element: <Home />
      },
      {
        path: EVENT_PAGE,
        element: <Event />
      },
      {
        path: VOTE_PAGE,
        element: <Vote />
      },
      {
        path: LOGIN_PAGE,
        element: <Login />
      },
      {
        path: REGISTER_PAGE,
        element: <Register />
      },
      {
        path: ABOUT_PAGE,
        element: voteResult ? <VoteResult /> : <AboutEvent />
      },
      {
        path: ACCOUNT_PAGE,
        element: <Account />
      },
      {
        path: FEEDBACK_PAGE,
        element: <Feedback />
      }
    ]
  }
])

export default router
