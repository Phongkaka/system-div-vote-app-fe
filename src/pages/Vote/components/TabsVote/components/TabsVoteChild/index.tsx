import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import './style.scss'
import { useState } from 'react'

function TabsVoteChild() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };
  return (
    <>
      <div className='slider m-auto'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides
          navigation={true}
          loop
          className='mySwiper tabs__rank'
        >
          <SwiperSlide>
            <button
              type='button'
              className={`btn__tabs h-20 bg-white rounded-sm w-full text-center text-blue-600 font-bold flex justify-center items-center ${
                activeButton === 0 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(0)}
            >
              カサブランカ
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              type='button'
              className={`btn__tabs h-20 bg-white rounded-sm w-full text-center text-blue-600 font-bold flex justify-center items-center ${
                activeButton === 5 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(5)}
            >
              ローズ L
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              type='button'
              className={`btn__tabs h-20 bg-white rounded-sm w-full text-center text-blue-600 font-bold flex justify-center items-center ${
                activeButton === 1 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(1)}
            >
              ローズ P
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              type='button'
              className={`btn__tabs h-20 bg-white rounded-sm w-full text-center text-blue-600 font-bold flex justify-center items-center ${
                activeButton === 2 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(2)}
            >
              ガーベラ L
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              type='button'
              className={`btn__tabs h-20 bg-white rounded-sm w-full text-center text-blue-600 font-bold flex justify-center items-center ${
                activeButton === 3 ? 'active' : ''
              }`}
              onClick={() => handleButtonClick(3)}
            >
              ガーベラ P
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button
              type='button'
              className={`btn__tabs h-20 bg-white rounded-sm w-full text-center text-blue-600 font-bold flex justify-center items-center ${
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
