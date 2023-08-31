import { useRecoilValue } from 'recoil'
import Candidate from './Candidate'
import { candidates } from '~/recoil/atom'
import { useState } from 'react'
import PillTabs from '~/components/PillTabs'

const BlockRank = () => {
  const candidateList = useRecoilValue(candidates)

  const [activeTab, setActiveTab] = useState<string>('tab1')

  const tabs = [
    { id: 'tab1', label: 'カサブランカ' },
    { id: 'tab2', label: 'ローズ L' },
    { id: 'tab3', label: 'ローズ P' }
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div className='mt-10'>
      <PillTabs tabs={tabs} onTabClick={handleTabClick} activeTab={activeTab} />
      <ul className='m-auto mt-5 flex flex-wrap justify-between'>
        {!!candidateList.length &&
          candidateList.map((candidate) => (
            <li className='w-full lg:w-[48%]' key={candidate.id}>
              <Candidate
                id={candidate.id}
                social_links={candidate.social_links}
                candidateImg={candidate.avatar}
                numRank='1'
                numberVote={candidate.point}
                nameCandidate='カサブランカ'
                nameCandidateDetail={candidate.name}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BlockRank
