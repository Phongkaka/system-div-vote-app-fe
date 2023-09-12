import Candidate from './Candidate'
import { useState } from 'react'
import PillTabs from '~/components/PillTabs'
import { fetchCandidates } from '~/services/candidatesAPI'
import { eventDetail } from '~/recoil/atom'
import { useRecoilValue } from 'recoil'
import { FlowiseCandidate } from '~/models/candidates'
import { ReactComponent as Loading } from '~/common/assets/images/loading.svg'
import { TEXT } from '~/constants/path'

const BlockRank = () => {
  const [candidates, setCandidates] = useState<FlowiseCandidate.ICandidateItem[]>([])
  const event = useRecoilValue(eventDetail)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabClick = async (tabId: number) => {
    try {
      setLoading(true)
      const response = await fetchCandidates(TEXT.ALL, tabId)
      const newCandidates = response.data
      setCandidates(newCandidates)
      setActiveTab(tabId)
    } catch (error) {
      console.log('error :>> ', error)
    } finally {
      setLoading(false)
    }
  }

  const refreshFetchCandidate = async () => {
    try {
      const response = await fetchCandidates(TEXT.ALL, activeTab)
      const newCandidates = response.data
      setCandidates(newCandidates)
    } catch (error) {
      console.log('error :>> ', error)
    }
  }

  return (
    <div className='mt-10 [&>div]:pb-9'>
      <PillTabs tabs={event.rank_types || []} onTabClick={handleTabClick} activeTab={activeTab} />

      {isLoading && (
        <div className='mt-10 flex w-full justify-center overflow-hidden'>
          <Loading />
        </div>
      )}
      <ul className='m-auto mt-5 flex flex-wrap justify-between'>
        {!isLoading &&
          candidates?.map((candidate: FlowiseCandidate.ICandidateItem) => (
            <li className='relative w-full lg:w-[48%]' key={candidate.id}>
              <Candidate
                refreshCandidate={refreshFetchCandidate}
                id={candidate.id}
                social_links={candidate.social_links}
                candidateImg={candidate.avatar}
                numRank={candidate.top}
                numberVote={candidate.point}
                nameCandidate={candidate.rank_type?.name}
                nameCandidateDetail={candidate.name}
              />
            </li>
          ))}
      </ul>
      {candidates && candidates.length === 0 && <div>候補者に噴水しない...</div>}
    </div>
  )
}

export default BlockRank
