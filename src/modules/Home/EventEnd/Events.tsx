import Container from '~/layouts/components/Container'
import ItemEvent from './ItemEvent'
import Title from '../Title'
import { EventItem, Events } from '~/models/Events'
import LoadingItems from '~/components/LoadingItems/LoadingItems'

interface Props {
  topTitle?: string | undefined
  title?: string | undefined
  data: Events
  isLoading?: boolean
}

const Events = ({ topTitle, title, data, isLoading }: Props) => {
  return (
    <Container className='w-[90%]'>
      <Title topTitle={topTitle} title={title} />
      <div className='grid grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3'>
        {isLoading ? (
          <LoadingItems count={3} loadingItemComponent={<ItemEvent.LoadingItemEvent />} />
        ) : (
          data?.map((item: EventItem) => (
            <ItemEvent linkPage={`/events/${item.slug}`} eventImg={item.banner} key={item.id} />
          ))
        )}
      </div>
    </Container>
  )
}

export default Events
