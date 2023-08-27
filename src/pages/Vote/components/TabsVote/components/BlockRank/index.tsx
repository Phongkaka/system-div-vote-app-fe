import { useRecoilValue } from 'recoil'
import TabsVoteChild from '../TabsVoteChild'
import Candidate from './Candidate'
import { cadidates } from '~/recoil/atom'

const BlockRank = () => {
  const cadidateList = useRecoilValue(cadidates)
  console.log('cadidateList', cadidateList)

  return (
    <div className='p-8'>
      <TabsVoteChild />
      <ul className='m-auto flex flex-wrap justify-between'>
        {!!cadidateList.length &&
          cadidateList.map((cadidate) => (
            <li className='w-full lg:w-[48%]' key={cadidate.id}>
              <Candidate
                id={cadidate.id}
                cadidateImg={cadidate.avatar}
                numRank='1'
                numberVote='170'
                nameCadidate={cadidate.name}
                nameCadidateDetail={cadidate.name}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BlockRank
