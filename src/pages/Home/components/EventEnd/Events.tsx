import ItemEvent from './ItemEvent'

const Events = () => {
  return (
    <div className='grid grid-cols-2 gap-[60px]'>
      {Array(6)
        .fill(null)
        .map(() => (
          <ItemEvent key={Math.random()} />
        ))}
    </div>
  )
}

export default Events
