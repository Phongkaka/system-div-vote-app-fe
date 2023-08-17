import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import './style.scss'
import { useEffect, useState } from 'react'

function TabsVoteChild() {
  const [activeButton, setActiveButton] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(4)

  const updateSlidesPerView = () => {
    if (window.innerWidth < 640) {
      setSlidesPerView(1)
    } else if (window.innerWidth < 768) {
      setSlidesPerView(2)
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(3)
    } else {
      setSlidesPerView(4)
    }
  }

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => {
      window.removeEventListener('resize', updateSlidesPerView)
    }
  }, [])

  const handleButtonClick = (index: any) => {
    setActiveButton(index)
  }
  return (
    <>
      <div className='slider m-auto'>
        <Swiper
          simulateTouch={false}
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={52}
          centeredSlides
          navigation={true}
          loop
          className='mySwiper tabs__rank mb-8 w-9/12'
        >
          <SwiperSlide>
            <button
              className={`btn__tabs flex h-[116px] w-full items-center justify-center rounded-sm bg-white text-center font-bold text-blue-600 ${
                activeButton === 0 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(0)}
            >
              カサブランカ
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={`btn__tabs flex h-[116px] w-full items-center justify-center rounded-sm bg-white text-center font-bold text-blue-600 ${
                activeButton === 5 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(5)}
            >
              ローズ L
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={`btn__tabs flex h-[116px] w-full items-center justify-center rounded-sm bg-white text-center font-bold text-blue-600 ${
                activeButton === 1 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(1)}
            >
              ローズ P
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={`btn__tabs flex h-[116px] w-full items-center justify-center rounded-sm bg-white text-center font-bold text-blue-600 ${
                activeButton === 2 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(2)}
            >
              ガーベラ L
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={`btn__tabs flex h-[116px] w-full items-center justify-center rounded-sm bg-white text-center font-bold text-blue-600 ${
                activeButton === 3 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(3)}
            >
              ガーベラ P
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              className={`btn__tabs flex h-[116px] w-full items-center justify-center rounded-sm bg-white text-center font-bold text-blue-600 ${
                activeButton === 4 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(4)}
            >
              大会運営事務局
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default TabsVoteChild
