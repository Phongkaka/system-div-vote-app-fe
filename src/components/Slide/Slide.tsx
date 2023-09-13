import Slider from 'react-slick'
import Item from '~/components/Dialog/item'
import './Slide.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Slide = ({ data }: any) => {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          dots: false,
          centerMode: false
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {data?.map((item: any) => (
        <div className='carousel-item-wrapper'>
          <Item linkPage={`/events/${item.slug}`} img={item.banner} />
        </div>
      ))}
    </Slider>
  )
}

export default Slide
