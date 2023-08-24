import Container from '~/layouts/components/Container'
import ItemEvent from './ItemEvent'
import Title from '../Title'
import { EventItem } from '~/models/Events'

interface Props {
  topTitle?: string | undefined
  title?: string | undefined
  data: any
}

const Events = ({ topTitle, title, data }: Props) => {
  return (
    <Container>
      <Title topTitle={topTitle} title={title} />
      <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {data?.map((item: EventItem) => (
          <ItemEvent linkPage='#' eventImg={item.banner} key={item.id} />
        ))}
      </div>
    </Container>
  )
}

export default Events
