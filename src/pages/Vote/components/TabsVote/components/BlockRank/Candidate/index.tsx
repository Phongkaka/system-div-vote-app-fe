import { Link } from 'react-router-dom'

import link_ic from '~/common/assets/images/link.png'
import vote from '~/common/assets/images/vote.svg'
import gift from '~/common/assets/images/gift.svg'
import profile from '~/common/assets/images/ic_profile.svg'

interface Props {
  numberVote?: string | undefined
  numRank?: string | undefined
  nameCadidate?: string | undefined
  nameCadidateDetail?: string | undefined
  cadidateImg?: string | undefined
}

const Candidate = ({
  numberVote,
  numRank,
  nameCadidate,
  cadidateImg,
  nameCadidateDetail
}: Props) => {
  return (
    <div className='cadidate__user m-auto my-8 flex justify-between'>
      <div className='left__cadidate mr-2 flex w-1/3 flex-wrap items-center justify-center'>
        <div className='mb-4 w-[122px]'>
          <img className='w-full rounded-full' src={cadidateImg} alt='cadidate' />
        </div>
        <div className='bottom__link flex w-2/3 justify-center'>
          <Link to='#' className='mr-2 block h-10 w-10'>
            <img src={link_ic} alt='link icon' />
          </Link>
          <Link to='#' className='block h-10 w-10'>
            <img src={profile} alt='profile icon' />
          </Link>
        </div>
      </div>
      <div className='right__cadidate w-2/3'>
        <p className='name__cadidate mb-4'>
          <span className='border border-[#fc2e9e] px-4 py-1 text-[#fc2e9e]'>{nameCadidate}</span>
        </p>
        <div className='rank__cadidate mb-4 flex'>
          <span className='mr-4 border-y border-[#fc2e9e] px-5 py-1 font-semibold italic text-[#fc2e9e]'>
            <i>{numRank}</i>位
          </span>
          <span className='border-y border-[#5a5a5a] px-5 py-1 font-bold text-[#473a3a]'>
            <i>{numberVote}</i>票
          </span>
        </div>
        <span className='mb-4 block text-xl font-semibold text-[#473a3a]'>
          {nameCadidateDetail} <i className='text-sm'>さん</i>
        </span>
        <div className='group__btn flex'>
          <button className='mr-3 flex cursor-pointer items-center justify-center border-[2px] p-1 text-[#fc2e9e]'>
            <img className='w-[40px]' src={vote} alt='vote icon' />
            <span>投票する</span>
          </button>
          <button className='flex cursor-pointer items-center justify-center border-[2px] border-[#3879d9] p-1 text-[#3879d9]'>
            <img className='h-11 w-11' src={gift} alt='gift icon' />
            <span>サポーター</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Candidate
