import { Link } from 'react-router-dom'
import cadidateImg from '~/common/assets/images/candidate-01.jpg'
import twImg from '~/common/assets/images/twitter.svg'
import igImg from '~/common/assets/images/ig.svg'

function CadidateEvent() {
  return (
    <div className='mb-14'>
      <img
        className='m-auto mb-7 h-[296px] w-[296px] rounded-[50%]'
        src={cadidateImg}
        alt='cadidate'
      />
      <p className='m-auto mb-3 w-[100px] border border-[#fc2e9e] p-1 text-center text-xs text-[#fc2e9e]'>
        最優秀特別賞
      </p>
      <span className='relative mb-7 block text-center text-2xl'>
        海嶋正人 <i className='absolute bottom-0 text-xs not-italic'>さん</i>
      </span>
      <span className='m-auto block w-[100px] border-b border-t border-dotted border-[#fc2e9e] text-center text-[#fc2e9e]'>
        2446票
      </span>
      <div className='group__link mt-4 flex justify-center'>
        <Link to='#' className='mr-2 block w-12'>
          <img src={twImg} alt='twitter' />
        </Link>
        <Link to='#'>
          <img src={igImg} alt='instagram' className='block w-12' />
        </Link>
      </div>
    </div>
  )
}

export default CadidateEvent
