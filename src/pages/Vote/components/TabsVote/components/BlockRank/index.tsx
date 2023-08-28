import { useRecoilValue } from 'recoil'
import TabsVoteChild from '../TabsVoteChild'
import Candidate from './Candidate'
import { cadidates } from '~/recoil/atom'

const BlockRank = () => {
  const cadidateList = useRecoilValue(cadidates)

  return (
    <div className='p-8'>
      <TabsVoteChild />
      <ul className='m-auto flex flex-wrap justify-between'>
        {!!cadidateList.length &&
          cadidateList.map((cadidate) => (
            <li className='w-full lg:w-[48%]' key={cadidate.id}>
              <Candidate
                cadidateImg={cadidate.avatar}
                numRank='1'
                numberVote={cadidate.point}
                nameCadidate='カサブランカ'
                nameCadidateDetail={cadidate.name}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BlockRank
