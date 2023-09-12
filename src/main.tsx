import { QueryClient, QueryClientProvider } from 'react-query'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppRouter from './routers/index.tsx'
import { BrowserRouter } from 'react-router-dom'
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
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App>
          <AppRouter />
        </App>
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
)
