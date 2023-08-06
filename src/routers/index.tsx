import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const MainLayout = lazy(() => import('~/layouts/main'))
const Home = lazy(() => import('~/pages/Home'))
const Event = lazy(() => import('~/pages/Event'))

const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/event-page',
        element: <Event></Event>
      }
    ]
  }
])

export default router
