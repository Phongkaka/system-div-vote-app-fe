import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Vote'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))
const AboutEvent = lazy(() => import('~/pages/AboutEvent'))
const VoteResult = lazy(() => import('~/pages/VoteResult'))
const Vote = lazy(() => import('~/pages/Vote'))

const voteResult = true

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/event-page',
        element: <Event />
      },
      {
        path: '/vote-page',
        element: <Vote />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/about-event',
        element: voteResult ? <VoteResult /> : <AboutEvent />
      }
    ]
  }
])

export default router
