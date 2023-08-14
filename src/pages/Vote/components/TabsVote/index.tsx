import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react'
import BlockRank from './components/BlockRank'
import Candidate from './components/Candidate'

export function TabsVote() {
  const data = [
    {
      label: 'ブロックRanking',
      value: 'ranking',
      component: <BlockRank />
    },
    {
      label: '候補者を検索',
      value: 'candidate',
      component: <Candidate />
    }
  ]

  return (
    <Tabs value='ranking' className='w-[100%]'>
      <TabsHeader
        className='flex justify-around'
        indicatorProps={{
          className: 'bg-blue-500 text-white z-0'
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            className='leading-1.5 items-cente order-first flex w-[48%] cursor-pointer rounded-t-[5px] bg-[#a9a9a9] p-[15px] text-center text-[15px] font-semibold text-white'
            key={value}
            value={value}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}
