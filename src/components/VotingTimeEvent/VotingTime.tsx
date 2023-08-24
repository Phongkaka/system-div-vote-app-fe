import Button from '../Button'

const VotingTime = () => {
  return (
    <div className='flex flex-grow flex-col items-center justify-end lg:w-1/3'>
      <div className=' flex h-full w-full flex-col justify-end gap-10'>
        <h1 className='text-xl font-semibold lg:text-2xl'>ネクストヒロインプロジェクト</h1>
        <div className='flex'>
          <div className='flex w-1/3 items-center justify-center rounded-bl-lg rounded-tl-lg bg-black p-4'>
            <h2 className='text-lg text-white'>投票期間</h2>
          </div>

          <div className='200 flex flex-grow flex-col items-center rounded-br-lg rounded-tr-lg bg-white p-4'>
            <p className='text-base lg:text-lg'>2023/08/01 16:00</p>
            <span className='inline-block rotate-90 transform'>〜</span>
            <p className='text-base lg:text-lg'>2023/08/01 16:00</p>
          </div>
        </div>
        <Button
          className='w-full rounded-lg text-sm font-semibold lg:text-lg'
          variant='success'
          size='lg'
        >
          投票する
        </Button>
      </div>
    </div>
  )
}

export default VotingTime
