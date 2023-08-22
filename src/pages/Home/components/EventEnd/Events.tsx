import Container from '~/layouts/components/Container'
import ItemEvent from './ItemEvent'
import Title from '../Title'
import { Events } from '~/models/Events'

interface Props {
  topTitle?: string | undefined
  title?: string | undefined
  data: Events
}

const Events = ({ topTitle, title, data }: Props) => {
  return (
    <Container>
      <Title topTitle={topTitle} title={title} />
      <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {data
          .filter((item) => item.status === '0')
          .map((item) => (
            <ItemEvent linkPage={item.link} eventImg={item.banner} key={item.id} />
          ))}
      </div>
    </Container>
  )
}

export default Events
