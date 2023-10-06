import { Link } from 'react-router-dom'
import Container from '../Container'

const Footer = () => {
  return (
    <footer className='mt-[118px] bg-[#111] py-14'>
      <Container>
        <ul className='flex flex-col flex-wrap gap-3 lg:flex-row lg:gap-0'>
          <li className='mr-5 text-gray-600'>
            <Link to='#' className='text-white'>
              特定商取引法に基づく表記
            </Link>
          </li>
          <li className='mr-5 text-gray-600'>
            <Link to='#' className='text-white'>
              利用規約（投票サービス利用者様向け）
            </Link>
          </li>
        </ul>
        <ul className='mt-4 flex flex-col flex-wrap gap-3 lg:flex-row lg:gap-0'>
          <li className='mr-5 text-gray-600'>
            <Link to='#' className='text-white'>
              利用規約（候補者様向け）
            </Link>
          </li>
          <li className='mr-5 text-gray-600'>
            <Link to='/feedback' className='text-white'>
              お問い合わせ
            </Link>
          </li>
          <li className='mr-5 text-gray-600'>
            <Link to='#' className='text-white'>
              運営会社
            </Link>
          </li>
        </ul>
        <p className='pt-14 text-xs text-white text-opacity-50'>Copyright 2023 Vote App</p>
      </Container>
    </footer>
  )
}

export default Footer
