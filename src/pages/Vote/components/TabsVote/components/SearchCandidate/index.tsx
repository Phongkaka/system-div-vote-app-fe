import { useState, ChangeEvent, FormEvent } from 'react'

const SearchCandidate = () => {
  const [inputParam, setInputParam] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  console.log({ inputParam })

  return (
    <div className='border-4 border-solid border-blue-500 p-8'>
      <form
        onSubmit={handleSubmit}
        className='search__cadidate relative m-auto h-12 w-11/12 max-w-xs overflow-hidden rounded-full border-2 border-solid border-blue-500 bg-white p-2 md:w-96'
      >
        <input
          className='h-5 w-full border-none pl-4 pr-14 text-base outline-none'
          type='text'
          name='name'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputParam(e.target.value)}
          placeholder='候補者名を入力'
        />
        <button
          className='absolute right-0 top-[-2px] h-12 w-14 cursor-pointer border-none bg-white text-blue-500 outline-none'
          value='Search'
        >
          Search
        </button>
      </form>
      <span className='text-md text-md mx-auto mt-8 block w-[500px] text-[#473a3a]'>
        候補者名を入力してください。名前の一部での部分一致検索も可能です。
        ※検索結果が出てこない場合、候補者様の表記が特殊文字（絵文字）等含まれていないかご確認ください。
      </span>
    </div>
  )
}

export default SearchCandidate
