import { Suspense, ReactNode, useEffect, useState } from 'react'
import Loading from './components/Loading'

function App({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {isVisible && (
        <div onClick={scrollToTop} className='back-to-top'>
          Top
        </div>
      )}
    </>
  )
}

export default App
