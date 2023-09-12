import clsx from 'clsx'
import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div className={clsx('m-auto w-[1024px] max-w-[calc(100%-48px)]', className)}>{children}</div>
  )
}
