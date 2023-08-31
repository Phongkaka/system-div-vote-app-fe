import { Swiper, SwiperSlide } from 'swiper/react'
import Item from './item'
import { Autoplay } from 'swiper/modules'
import { EventItem, Events } from '~/models/Events'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import './style.scss'

interface Props {
  title?: string | undefined
  data: Events
}

const breakpoints = {
  640: {
    slidesPerView: 2
  },
  768: {
    slidesPerView: 2.25
  },
  1080: {
    slidesPerView: 2.5
  },
  1280: {
    slidesPerView: 3
  }
}

function Carousel({ title, data }: Props) {
  return (
    <>
      <h3 className='pb-5'>{title}</h3>
      <div className='slider m-auto'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides
          centeredSlidesBounds
          loop
          autoplay={{
            delay: 2000
          }}
          breakpoints={breakpoints}
          className='mySwiper'
        >
          {data?.map((item: EventItem) => (
            <SwiperSlide key={item.id}>
              <div className='carousel-item-wrapper'>
                <Item linkPage={`/events/${item.slug}`} img={item.banner} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Carousel
