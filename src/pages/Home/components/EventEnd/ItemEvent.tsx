interface Props {
  eventImg?: string | undefined
}
const ItemEvent = ({ eventImg }: Props) => {
  return (
    <div className='h-[184px]'>
      <img src={eventImg} className='w-full h-full object-cover' alt='event' />
    </div>
  )
}

export default ItemEvent
