interface Props {
  topTitle?: string | undefined
  title?: string | undefined
}

function Title({ topTitle, title }: Props) {
  return (
    <>
      <span className='text-green block pb-1 text-base font-bold'>{topTitle}</span>
      <h2 className='mb-7 text-[22px] font-bold text-black'>{title}</h2>
    </>
  )
}

export default Title
