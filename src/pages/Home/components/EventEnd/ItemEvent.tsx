interface Props {
  eventImg?: string | undefined
}
const ItemEvent = ({ eventImg }: Props) => {
  return (
    <div className='h-fit'>
      <img src={eventImg} className='h-full w-full object-cover' alt='event' />
    </div>
  )
}

export default ItemEvent
