import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'
import BlockRank from './components/BlockRank'
import SearchCandidate from './components/SearchCandidate'
import './style.scss'
import { useState } from 'react'

const TabsVote = () => {
  const [activeTab, setActiveTab] = useState('ranking') // Set the initial active tab

  const data = [
    {
      label: 'ブロックRanking',
      value: 'ranking',
      component: <BlockRank />
    },
    {
      label: '候補者を検索',
      value: 'candidate',
      component: <SearchCandidate />
    }
  ]

  return (
    <Tabs value={activeTab} className='w-[100%]'>
      <TabsHeader
        className='tabs__voting flex gap-4 p-0'
        indicatorProps={{
          className: 'bg-black text-white z-0'
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            className={`leading-1.5 order-first flex cursor-pointer items-center rounded-lg border-[1px] border-[#D9D9D9] bg-white p-[15px] text-center text-[15px] font-semibold ${
              activeTab === value ? 'active-tab' : 'inactive-tab'
            }`}
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value} className='p-0'>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}

export default TabsVote
