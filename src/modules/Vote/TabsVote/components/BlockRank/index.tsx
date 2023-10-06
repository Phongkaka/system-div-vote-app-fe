import Candidate from '../../../../../components/Candidate'
import { useEffect, useState } from 'react'
import PillTabs from '~/components/PillTabs'
import { fetchCandidates } from '~/services/candidatesAPI'
import { eventDetail } from '~/recoil/atom'
import { useRecoilValue } from 'recoil'
import { FlowiseCandidate } from '~/models/candidates'
import { TEXT } from '~/constants/path'
import LoadingItems from '~/components/LoadingItems/LoadingItems'

const BlockRank = () => {
  const [candidates, setCandidates] = useState<FlowiseCandidate.ICandidateItem[]>([])
  const event = useRecoilValue(eventDetail)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<number>(-1)

  useEffect(() => {
    if (activeTab < 0 && event.id) {
      const fetch = async () => {
        const response = await fetchCandidates(TEXT.ALL, activeTab, event.id)
        const newCandidates = response.data
        setCandidates(newCandidates)
      }
      fetch()
    }
  }, [activeTab, event])

  const handleTabClick = async (tabId: number) => {
    try {
      setLoading(true)
      const response = await fetchCandidates(TEXT.ALL, tabId, event.id)
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
      const response = await fetchCandidates(TEXT.ALL, activeTab, event.id)
      const newCandidates = response.data
      setCandidates(newCandidates)
    } catch (error) {
      console.log('error :>> ', error)
    }
  }

  const [isStartEvent, setStartEvent] = useState<boolean>(true)

  useEffect(() => {
    if (event && event.start_time) {
      const currentTime = new Date().getTime()
      const toggleCountDown = new Date(event.start_time).getTime() > currentTime
      if (toggleCountDown) {
        setStartEvent(false)
      } else {
        setStartEvent(true)
      }
    }
  }, [event, setStartEvent])

  return (
    <div className='mt-10 [&>div]:pb-9'>
      <PillTabs
        showAll
        tabs={event.rank_types || []}
        onTabClick={handleTabClick}
        activeTab={activeTab}
        eventId={event.id}
      />

      <ul className='m-auto mt-5 flex flex-wrap justify-between'>
        {isLoading ? (
          <>
            <LoadingItems
              count={4}
              loadingItemComponent={
                <li className='relative w-full lg:w-[48%]'>
                  <Candidate.CandidateLoading />
                </li>
              }
            />
          </>
        ) : (
          candidates?.map((candidate: FlowiseCandidate.ICandidateItem) => (
            <li className='relative w-full lg:w-[48%]' key={candidate.id}>
              <Candidate
                isStartEvent={isStartEvent}
                minimum_vote={event?.minimum_vote}
                candidate_photos={candidate.candidate_photos}
                status={event?.status}
                refreshCandidate={refreshFetchCandidate}
                id={candidate.id}
                social_links={candidate.social_links}
                candidateImg={candidate.avatar}
                numRank={candidate.top}
                numberVote={candidate.point}
                rankTypeName={candidate.rank_type?.name}
                nameCandidate={candidate.name}
              />
            </li>
          ))
        )}
      </ul>
      {candidates && candidates.length === 0 && <div>候補者を追加しています。</div>}
    </div>
  )
}

export default BlockRank
