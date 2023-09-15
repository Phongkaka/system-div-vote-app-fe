import { ChangeEvent, FormEvent, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { fetchCandidateSearch } from '~/services/candidatesAPI'
import { ReactComponent as SearchIcon } from '~/common/assets/images/search.svg'
import Candidate from '../BlockRank/Candidate'

const SearchCandidate = () => {
  const [inputParam, setInputParam] = useState('')
  const queryClient = useQueryClient()
  const queryKey = ['candidates', inputParam]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputParam) {
      queryClient.prefetchQuery(queryKey)
    }
  }

  const { data, refetch, isLoading } = useQuery(
    queryKey,
    () =>
      fetchCandidateSearch({
        filter: {
          where: {
            name: {
              like: `%${inputParam}%`
            }
          }
        }
      }),
    {
      enabled: false
    }
  )

  return (
    <div className='mt-10'>
      <div className='text-md text-md mb-10 text-[#473a3a]'>
        <p className='mb-1 text-base font-semibold'>
          候補者名を入力してください。名前の一部での部分一致検索も可能です。
        </p>
        <p className='text-base font-semibold'>
          ※検索結果が出てこない場合、候補者様の表記が特殊文字（絵文字）等含まれていないかご確認ください。
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='search__candidate relative flex h-12 items-center overflow-hidden rounded-lg bg-white md:w-96'
      >
        <input
          className='h-full w-full border-none pl-4 pr-14 text-base outline-none'
          type='text'
          name='name'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputParam(e.target.value)}
        />
        <button
          type='submit'
          className='absolute right-0 h-12 w-14 cursor-pointer border-none bg-white text-blue-500 outline-none'
          value='Search'
        >
          <SearchIcon className='m-auto block h-9 w-9 rounded-lg bg-black p-1' />
        </button>
      </form>
      <ul className='grid list-none grid-cols-1 gap-x-10 lg:grid-cols-2'>
        {isLoading ? (
          <>
            {[...Array(3)].map((_, index: number) => (
              <li key={index}>
                <Candidate.CandidateLoading />
              </li>
            ))}
          </>
        ) : (
          <>
            {data?.map((candidate) => (
              <li key={candidate.id}>
                <Candidate
                  refreshCandidate={refetch}
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
          </>
        )}
      </ul>
    </div>
  )
}

export default SearchCandidate
