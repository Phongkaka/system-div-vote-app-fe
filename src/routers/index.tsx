import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Event'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))
const UpcomingEvent = lazy(() => import('~/pages/UpcomingEvent'))

const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
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
        path: '/login',
        element: (
          <Login />
        )
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/upcoming-event',
        element: <UpcomingEvent />
      }
    ]
  }
])

export default router
