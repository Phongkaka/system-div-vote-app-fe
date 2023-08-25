import { Suspense, ReactNode } from 'react'
import Loading from './components/Loading'

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  )
}

export default App
