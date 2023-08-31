import React from 'react'

interface Props {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className='m-auto w-[1024px] max-w-[calc(100%-48px)]'>{children}</div>
}
