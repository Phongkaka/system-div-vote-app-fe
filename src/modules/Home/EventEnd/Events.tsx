import Container from '~/layouts/components/Container'
import ItemEvent from './ItemEvent'
import Title from '../Title'
import { EventItem, Events } from '~/models/Events'

interface Props {
  topTitle?: string | undefined
  title?: string | undefined
  data: Events
}

const Events = ({ topTitle, title, data }: Props) => {
  return (
    <Container className='w-[90%]'>
      <Title topTitle={topTitle} title={title} />
      <div className='grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3'>
        {data?.map((item: EventItem) => (
          <ItemEvent linkPage={`/events/${item.slug}`} eventImg={item.banner} key={item.id} />
        ))}
      </div>
    </Container>
  )
}

export default Events
