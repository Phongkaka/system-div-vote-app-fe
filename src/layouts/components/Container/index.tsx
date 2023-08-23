interface Props {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className='px-[20px] md:px-[20px] lg:px-[183px]'>{children}</div>
}
