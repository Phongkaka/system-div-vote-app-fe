import { Link } from "react-router-dom"
import logo from '~/common/assets/images/logo.svg'

const Footer = () => {
  return <footer>
    <div className="bg-[#333]">
      <ul className="flex justify-center pt-10 flex-wrap">
        <li className='text-gray-600'>
          <Link to='#' className="text-white m-[15px]">特定商取引法に基づく表記</Link>
        </li>
        <li className='text-gray-600'>
          <Link to='#' className="text-white m-[15px]">利用規約（投票サービス利用者様向け）</Link>
        </li>
        <li className='text-gray-600'>
          <Link to='#' className="text-white m-[15px]">利用規約（候補者様向け）</Link>
        </li>
        <li className='text-gray-600'>
          <Link to='#' className="text-white m-[15px]">お問い合わせ</Link>
        </li>
        <li className='text-gray-600'>
          <Link to='#' className="text-white m-[15px]">運営会社</Link>
        </li>
      </ul>
      <Link to='#' className='w-[374px] block m-auto'>
        <img className="max-w-[350px] block m-auto my-10" src={logo} alt='logo' />
      </Link>
      <p className="p-2.5 text-center text-[#fff] text-xs">©FAIR NEXT INNOVATION 2020-2022.</p>
    </div>
  </footer>
}

export default Footer
