import { Link } from 'react-router-dom'

interface Props {
  logoImg?: string | undefined
}

export default function HeaderEvent({ logoImg }: Props) {
  return (
    <header>
      <Link to='#' className='ml-10 mt-10 block w-[186px]'>
        <img src={logoImg} alt='logo' />
      </Link>
    </header>
  )
}
