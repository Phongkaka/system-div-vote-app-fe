import { useRecoilState } from 'recoil'
import Candidate from './Candidate'
import { candidates } from '~/recoil/atom'
import { useEffect, useState } from 'react'
import PillTabs from '~/components/PillTabs'
import { useInfiniteQuery } from 'react-query'
import { fetchCandidates } from '~/services/candidatesAPI'
import { FlowiseCandidate } from '~/models/candidates'

const BlockRank = () => {
  const [candidateList, setCandidateList] = useRecoilState(candidates)

  const { data, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
    'candidates',
    ({ pageParam }) => fetchCandidates(pageParam),
    {
      getNextPageParam: (lastPage) => {
        console.log('lastPage?.next_page_url', lastPage?.next_page_url)
        return lastPage?.next_page_url || null
      }
    }
  )

  useEffect(() => {
    if (!data) return
    const updatedCandidateList = data.pages.flatMap((page) => page.data)
    setCandidateList(updatedCandidateList)
    console.log('updatedCandidateList ', updatedCandidateList)
  }, [data, setCandidateList])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, isFetchingNextPage])

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
      <div className='m-auto mt-5 flex flex-wrap justify-between'>
        {candidateList?.map((candidate: FlowiseCandidate.ICandidateItem) => (
          <div className='w-full lg:w-[48%]' key={candidate.id}>
            <Candidate
              id={candidate.id}
              social_links={candidate.social_links}
              candidateImg={candidate.avatar}
              numRank='1'
              numberVote={candidate.point}
              nameCandidate='カサブランカ'
              nameCandidateDetail={candidate.name}
            />
          </div>
        ))}
        <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      </div>
    </div>
  )
}

export default BlockRank
