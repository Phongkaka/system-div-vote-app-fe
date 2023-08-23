interface Props {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className='w-[1024px] max-w-[calc(100%-48px)] m-auto'>{children}</div>
}
