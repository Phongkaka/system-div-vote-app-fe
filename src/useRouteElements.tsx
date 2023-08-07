import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/main'
import Home from './pages/Home'
import Event from './pages/Event'
import Login from './pages/Login'
import Register from './pages/Register'

// const MainLayout = lazy(() => import('~/layouts/main'))
// const Home = lazy(() => import('~/pages/Home'))
// const Event = lazy(() => import('~/pages/Event'))
export default function useRouteElements() {
  const routerElements = useRoutes([
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
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])
  return routerElements
}
