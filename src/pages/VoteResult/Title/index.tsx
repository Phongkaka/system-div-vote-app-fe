interface Props {
  title?: string | undefined
}

function Title({ title }: Props) {
  return (
    <h2 className='mx-auto mb-2 block text-center text-3xl font-bold text-[#fc2e9e]'>{title}</h2>
  )
}

export default Title
