import { Swiper, SwiperSlide } from 'swiper/react'
import Item from './item'

import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function Banner() {
  return (
    <div className='slider w-11/12 m-auto'>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        pagination={{
          clickable: true
        }}
        loop
        autoplay={{
          delay: 2000
        }}
        navigation={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
