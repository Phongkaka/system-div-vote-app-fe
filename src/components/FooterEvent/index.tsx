import { Link } from 'react-router-dom'

interface Props {
  logoImg?: string | undefined
  bannerImg?: string | undefined
}

export default function FooterEvent({ logoImg, bannerImg }: Props) {
  return (
    <footer>
      <Link to='#' className='m-auto block w-[186px]'>
        <img src={logoImg} alt='logo' />
      </Link>
      <Link to='#' className='m-auto my-8 block lg:w-[500px]'>
        <img className='w-full' src={bannerImg} alt='banner' />
      </Link>
      <Link className='my-5 block pb-1 text-center text-sm text-[#473A3A]' to='#'>
        利用規約
      </Link>
      <p className='bg-[#E3E3E3] text-center text-xs'>
        Copyright 2022 KYOTO COLLECTION×Ranking Master
      </p>
    </footer>
  )
}
