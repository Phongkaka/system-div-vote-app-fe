interface Props {
  img?: string | undefined
}
function Item({img}: Props) {
  return (
    <div className='item-slider mb-10'>
      <img src={img} alt='customer' />
    </div>
  )
}

export default Item
