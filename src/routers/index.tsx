import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import RegisterLayout from '~/layouts/RegisterLayout'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Event'))

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
          <RegisterLayout>
            <Login />
          </RegisterLayout>
        )
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

export default router
