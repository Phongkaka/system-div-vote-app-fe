interface Props {
  title?: string | undefined
}

const Title = ({ title }: Props) => {
  return (
    <h2 className='mb-5 border-l-[3px] border-green pl-4 text-xl font-semibold lg:text-[22px] '>
      {title}
    </h2>
  )
}

export default Title
