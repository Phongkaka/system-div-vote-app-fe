interface PillTabs {
  tabs: {
    id: string
    label: string
  }[]
  activeTab: string
  onTabClick: (tabId: string) => void
}

const PillTabs = ({ tabs, activeTab, onTabClick }: PillTabs) => {
  return (
    <ul className='flex flex-wrap gap-5 text-center text-base font-medium'>
      {tabs?.map((tab) => (
        <li key={tab.id} className='cursor-pointer'>
          <p
            onClick={() => onTabClick(tab.id)}
            className={`inline-block rounded-lg px-4 py-3 font-bold ${
              activeTab === tab.id
                ? 'bg-green text-black'
                : 'bg-white hover:bg-gray-100  hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default PillTabs
