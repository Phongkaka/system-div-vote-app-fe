import LoadingSkeleton from '~/components/LoadingSkeleton'
import Container from '~/layouts/components/Container'

function AboutEventSkeleton() {
  return (
    <>
      <Container className='mb-[200px]'>
        <div className='upcoming__event--page'>
          <div className='mb-10 flex flex-col gap-8 lg:flex-row'>
            <LoadingSkeleton className='h-[150px] lg:h-[250px] lg:w-[60%]' />
            <div className='flex h-auto flex-col justify-between gap-5 lg:h-[250px] lg:w-[40%]'>
              <LoadingSkeleton className='h-[30px]' />
              <LoadingSkeleton className='h-[100px]' />
              <LoadingSkeleton className='h-[40px]' />
            </div>
          </div>
          <div className='mb-10 grid gap-5 lg:grid-cols-2 lg:gap-10 lg:border-b-[2px] lg:border-gray-200 lg:pb-10'>
            <div>
              <LoadingSkeleton className='mb-5 h-[20px] w-[100px]' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
            </div>
            <div>
              <LoadingSkeleton className='mb-5 h-[10px] w-[100px]' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
            </div>
          </div>
          <div className='grid  gap-5 lg:grid-cols-2 lg:gap-10'>
            <div>
              <LoadingSkeleton className='mb-5 h-[10px] w-[100px]' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
            </div>
            <div>
              <LoadingSkeleton className='mb-5 h-[10px] w-[100px]' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
              <LoadingSkeleton className='mb-2 h-[10px] w-full' />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutEventSkeleton
