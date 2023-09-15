import Slider from 'react-slick'
import Item from '~/components/Dialog/item'
import './Slide.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  data: any
  isLoading?: boolean
}

const Slide = ({ data, isLoading }: Props) => {
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
    arrows: true,
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
    <>
      {isLoading ? (
        <div className='flex gap-8'>
          {[...Array(3)].map((_, index: number) => (
            <Item.LoadingItem key={index} className={index < 2 ? 'hide-on-mobile' : ''} />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {data?.map((item: any) => (
            <div className='carousel-item-wrapper' key={item.id}>
              <Item linkPage={`/events/${item.slug}`} img={item.banner} />
            </div>
          ))}
        </Slider>
      )}
    </>
  )
}

export default Slide
