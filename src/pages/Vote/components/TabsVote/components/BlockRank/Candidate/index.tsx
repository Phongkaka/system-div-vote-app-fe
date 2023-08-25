import { Link } from 'react-router-dom'

import crownIc from '~/common/assets/images/ic_crown.png'
import voteIc from '~/common/assets/images/ic_vote.png'
import socialX from '~/common/assets/images/ic_x.png'
import socialFb from '~/common/assets/images/ic_fb.png'
import socialIg from '~/common/assets/images/ic_ig.png'

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
    <div className='cadidate__user relative m-auto my-8 flex justify-between rounded-lg bg-white px-7 pb-8 pt-12'>
      <div className='left__cadidate mr-2 flex w-1/3 flex-wrap items-center justify-center'>
        <div className='mb-4 w-[122px]'>
          <img className='w-full rounded-md' src={cadidateImg} alt='cadidate' />
        </div>
        <div className='bottom__link flex w-2/3 justify-center'>
          <Link to='#' className='mr-2 block h-10 w-10'>
            <img src={socialX} alt='link icon' />
          </Link>
          <Link to='#' className='mr-2 block h-10 w-10'>
            <img src={socialIg} alt='profile icon' />
          </Link>
          <Link to='#' className='block h-10 w-10'>
            <img src={socialFb} alt='profile icon' />
          </Link>
        </div>
      </div>
      <div className='right__cadidate w-2/3'>
        <p className='name__cadidate absolute left-0 top-0 mb-4 rounded-br-lg rounded-tl-lg bg-dark px-2 py-1'>
          <span className='px-4 py-1 text-white'>{nameCadidate}</span>
        </p>
        <span className='mb-1 block text-xl font-semibold text-black'>
          {nameCadidateDetail} <i className='text-sm not-italic'>さん</i>
        </span>
        <div className='rank__cadidate mb-4 flex'>
          <span className='mr-4 flex items-center font-bold text-black'>
            <img className='mr-2 h-[15px] w-[18px]' src={crownIc} alt='icon' />{' '}
            <i className='font-bold not-italic'>{numRank}</i>位
          </span>
          <span className='flex items-center font-bold text-black'>
            <img className='mr-2' src={voteIc} alt='icon' />{' '}
            <i className='not-italic'>{numberVote}</i>票
          </span>
        </div>
        <div className='group__btn flex flex-wrap'>
          <button className='mb-4 flex h-10 w-[271px] cursor-pointer items-center justify-center rounded-[9px] bg-black p-1 text-white'>
            <span className='text-sm font-bold'>投票する</span>
          </button>
          <button className='flex h-[40px] w-[172px] cursor-pointer items-center justify-center rounded-[9px] border-dark bg-[#F2F2F4] p-1 text-black'>
            <span className='text-sm'>サポーターランキング</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Candidate
