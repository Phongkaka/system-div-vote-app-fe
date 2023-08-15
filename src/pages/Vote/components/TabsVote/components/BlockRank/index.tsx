import Title from '../../../Title'
import TabsVoteChild from '../TabsVoteChild'
import Candidate from './Candidate'
import cadidateImg from '~/common/assets/images/candidate.jpg'

const BlockRank = () => {
  return (
    <div className='border-4 border-solid border-blue-500 p-8'>
      <TabsVoteChild />
      <Title title='ローズ P Ranking' />
      <ul className='m-auto flex w-3/4 flex-wrap justify-between'>
        <li className='w-full xl:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='1'
            numberVote='170'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.10 杏奈 ♬'
          />
        </li>
        <li className='w-full xl:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='2'
            numberVote='120'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.4 ジェシー'
          />
        </li>
        <li className='w-full xl:w-[48%]'>
          <Candidate
            cadidateImg={cadidateImg}
            numRank='6'
            numberVote='97'
            nameCadidate='ガーベラ P'
            nameCadidateDetail='NO.15 あき'
          />
        </li>
        <li className='w-full xl:w-[48%]'>
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
