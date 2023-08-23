interface GuideProps {
  title?: string
  content?: string
}
const Guide = ({ title, content }: GuideProps) => {
  return (
    <div className='border-b-[2px] border-gray-200 pb-5 lg:pb-0 lg:border-none'>
      <h2 className='mb-5 border-l-[3px] border-green pl-4 text-xl lg:text-[22px] font-semibold '>{title}</h2>
      <p className='font-medium text-sm lg:text-base'>{content}</p>
    </div>
  )
}

export default Guide
