interface GuideProps {
  title?: string
  content?: string
}
const Guide = ({ title, content }: GuideProps) => {
  return (
    <div className='border-b-[2px] border-gray-200 pb-5 lg:border-none lg:pb-0'>
      <h2 className='mb-5 border-l-[3px] border-green pl-4 text-xl font-semibold lg:text-[22px] '>
        {title}
      </h2>
      <p className='text-sm font-medium lg:text-base'>{content}</p>
    </div>
  )
}

export default Guide
