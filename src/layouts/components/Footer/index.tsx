import { Link } from 'react-router-dom'
import logo from '~/common/assets/images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className='bg-[#333]'>
        <ul className='flex flex-wrap justify-center pt-10'>
          <li className='text-gray-600'>
            <Link to='#' className='m-[15px] text-white'>
              特定商取引法に基づく表記
            </Link>
          </li>
          <li className='text-gray-600'>
            <Link to='#' className='m-[15px] text-white'>
              利用規約（投票サービス利用者様向け）
            </Link>
          </li>
          <li className='text-gray-600'>
            <Link to='#' className='m-[15px] text-white'>
              利用規約（候補者様向け）
            </Link>
          </li>
          <li className='text-gray-600'>
            <Link to='#' className='m-[15px] text-white'>
              お問い合わせ
            </Link>
          </li>
          <li className='text-gray-600'>
            <Link to='#' className='m-[15px] text-white'>
              運営会社
            </Link>
          </li>
        </ul>
        <Link to='#' className='m-auto block w-[374px]'>
          <img className='m-auto my-10 block max-w-[350px]' src={logo} alt='logo' />
        </Link>
        <p className='p-2.5 text-center text-xs text-[#fff]'>©FAIR NEXT INNOVATION 2020-2022.</p>
      </div>
    </footer>
  )
}

export default Footer
