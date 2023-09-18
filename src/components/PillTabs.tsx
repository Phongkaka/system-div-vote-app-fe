interface PillTabs {
  tabs: {
    id: number
    name: string
  }[]
  activeTab: number
  onTabClick: (id: number) => void
  showAll?: boolean
  eventId?: number
}

const PillTabs = ({ tabs, activeTab, onTabClick, showAll }: PillTabs) => {
  const updatedTabs = showAll ? [{ id: -1, name: '全て' }, ...tabs] : tabs

  return (
    <ul className='flex flex-wrap gap-5 text-center text-base font-medium'>
      {updatedTabs?.map((tab) => (
        <li key={tab.id} className='cursor-pointer'>
          <p
            onClick={() => {
              if (activeTab === tab.id) return
              onTabClick(tab.id)
            }}
            className={`inline-block rounded-lg px-4 py-3 font-bold transition duration-300 ${
              activeTab === tab.id
                ? 'transform bg-green text-black'
                : 'bg-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            {tab.name}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default PillTabs
