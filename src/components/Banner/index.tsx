interface Props {
  img?: string | undefined
}
function Banner({img}: Props) {
  return (
    <div className='banner mb-10'>
      <img src={img} alt='banner' />
    </div>
  )
}

export default Banner
