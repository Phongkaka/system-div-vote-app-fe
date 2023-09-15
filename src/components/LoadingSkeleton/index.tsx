import clsx from 'clsx'
import './LoadingSkeleton.scss'

interface Props {
  className?: string
}

const LoadingSkeleton = ({ className }: Props) => {
  return <div className={clsx('skeleton', className)}></div>
}

export default LoadingSkeleton
