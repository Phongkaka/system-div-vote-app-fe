interface Props {
  img?: string | undefined
}
function Banner({ img }: Props) {
  return (
    <div className='banner m-auto mb-10'>
      <img className='w-full' src={img} alt='banner' />
    </div>
  )
}

export default Banner
