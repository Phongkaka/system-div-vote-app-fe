interface GuideProps {
  title?: string
  content?: string
  id?: string
}
const Guide = ({ title, content, id }: GuideProps) => {
  return (
    <div id={id} className='border-b-[2px] border-gray-200 pb-5 lg:border-none lg:pb-0'>
      <h2 className='mb-5 border-l-[3px] border-green pl-4 text-xl font-semibold lg:text-[22px] '>
        {title}
      </h2>
      <div
        className='text-sm font-[400] lg:text-base'
        dangerouslySetInnerHTML={{ __html: content || '' }}
      ></div>
    </div>
  )
}

export default Guide
