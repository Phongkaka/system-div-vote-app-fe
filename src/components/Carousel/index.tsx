import { Swiper, SwiperSlide } from 'swiper/react'
import Item from './item'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { EventItem, Events } from '~/models/Events'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

interface Props {
  title?: string | undefined
  data: Events 
  status?: string | undefined
}

function Carousel({ title, data, status }: Props) {
  return (
    <>
      <h3 className='pb-5'>{title}</h3>
      <div className='slider m-auto'>
        <Swiper
          modules={[Pagination, Navigation, Autoplay ]}
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
          {data && data.filter(item => item.status === status).map((item: EventItem) => (
            <SwiperSlide>
              <Item img={item.banner} key={item.id} />
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </>
  )
}

export default Carousel
