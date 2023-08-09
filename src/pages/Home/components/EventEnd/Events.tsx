import ItemEvent from './ItemEvent'
import itemEvent from '~/assets/images/event-01.jpg'

const Events = () => {
  return (
    <>
      <h3 className='pb-5'>開催予定・開催中のイベント</h3>
      <div className='grid grid-cols-2 gap-[40px]'>
        {Array(6)
          .fill(null)
          .map(() => (
            <ItemEvent eventImg={itemEvent} key={Math.random()} />
          ))}
      </div>
    </>
  )
}

export default Events
