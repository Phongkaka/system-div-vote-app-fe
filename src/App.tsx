import { Suspense, ReactNode } from 'react'

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={<>...loading</>}>{children}</Suspense>
    </>
  )
}

export default App
