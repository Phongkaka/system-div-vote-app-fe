import './style.scss'

interface Props {
  title?: string | undefined
}

const Title = ({ title }: Props) => {
  return (
    <h2 className='title__vote flex items-center text-center text-3xl font-bold text-pink'>
      {title}
    </h2>
  )
}

export default Title
