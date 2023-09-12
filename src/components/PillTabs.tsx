import { useEffect } from 'react'

interface PillTabs {
  tabs: {
    id: number
    name: string
  }[]
  activeTab: number
  onTabClick: (id: number, name: string) => void
}

const PillTabs = ({ tabs, activeTab, onTabClick }: PillTabs) => {
  useEffect(() => {
    if (tabs && tabs.length > 0) {
      onTabClick(tabs[0].id, tabs[0].name)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs])

  return (
    <ul className='flex flex-wrap gap-5 text-center text-base font-medium'>
      {tabs?.map((tab) => (
        <li key={tab.id} className='cursor-pointer'>
          <p
            onClick={() => {
              if (activeTab === tab.id) return
              onTabClick(tab.id, tab.name)
            }}
            className={`inline-block rounded-lg px-4 py-3 font-bold ${
              activeTab === tab.id
                ? 'bg-green text-black'
                : 'bg-white hover:bg-gray-100  hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
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
