import TabsVoteChild from '../TabsVoteChild'
import Candidate from './Candidate'
import cadidateImg from '~/common/assets/images/candidate.jpg'

const BlockRank = () => {
  return (
    <div className='p-8'>
      <TabsVoteChild />
      <ul className='m-auto flex flex-wrap justify-between'>
        <li className='w-full lg:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='1'
            numberVote='170'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.10 杏奈 ♬'
          />
        </li>
        <li className='w-full lg:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='2'
            numberVote='120'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.4 ジェシー'
          />
        </li>
        <li className='w-full lg:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='6'
            numberVote='97'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.15 あき'
          />
        </li>
        <li className='w-full lg:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='7'
            numberVote='90'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.21 るな ♬'
          />
        </li>
      </ul>
    </div>
  )
}

export default BlockRank
