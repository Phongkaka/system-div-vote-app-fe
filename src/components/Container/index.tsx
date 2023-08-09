interface Props {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className='p-10'>{children}</div>
}
