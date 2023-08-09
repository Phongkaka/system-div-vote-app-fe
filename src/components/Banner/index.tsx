import { Swiper, SwiperSlide } from 'swiper/react'
interface Props {
  title?: string | undefined
}
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import Item from '../Carousel/item'

function Carousel({ title }: Props) {
  return (
    <>
      <h3 className='pb-5'>{title}</h3>
      <div className='slider w-11/12 m-auto'>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          pagination={{
            clickable: true
          }}
          navigation={true}
          loop
          autoplay={{
            delay: 2000
          }}
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
    </>
  )
}

export default Carousel
