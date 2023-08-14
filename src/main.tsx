import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/index.tsx'
import { RecoilRoot } from 'recoil'
import './index.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 86400000
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App>
          <RouterProvider router={router} />
        </App>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
)
