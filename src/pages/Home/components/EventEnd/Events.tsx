import ItemEvent from './ItemEvent'

const data = [
  {
    createdAt: '2023-08-10T03:25:06.132Z',
    name: 'Adrienne Lakin',
    slug: 'slug 1',
    logo: 'logo 1',
    about_desc: 'about_desc 1',
    schedule_desc: 'schedule_desc 1',
    vote_rule_desc: 'vote_rule_desc 1',
    reward_desc: 'reward_desc 1',
    status: '1',
    banner: 'https://picsum.photos/1920/600',
    id: '1'
  },
  {
    createdAt: '2023-08-09T22:00:52.387Z',
    name: 'Bobbie Adams DVM',
    slug: 'slug 2',
    logo: 'logo 2',
    about_desc: 'about_desc 2',
    schedule_desc: 'schedule_desc 2',
    vote_rule_desc: 'vote_rule_desc 2',
    reward_desc: 'reward_desc 2',
    status: '1',
    banner: 'https://picsum.photos/1920/600',
    id: '2'
  },
  {
    createdAt: '2023-08-09T13:28:37.528Z',
    name: 'Randal Wuckert',
    slug: 'slug 3',
    logo: 'logo 3',
    about_desc: 'about_desc 3',
    schedule_desc: 'schedule_desc 3',
    vote_rule_desc: 'vote_rule_desc 3',
    reward_desc: 'reward_desc 3',
    status: '2',
    banner: 'https://picsum.photos/1920/600',
    id: '3'
  },
  {
    createdAt: '2023-08-09T16:11:58.154Z',
    name: 'Kelly Brekke',
    slug: 'slug 4',
    logo: 'logo 4',
    about_desc: 'about_desc 4',
    schedule_desc: 'schedule_desc 4',
    vote_rule_desc: 'vote_rule_desc 4',
    reward_desc: 'reward_desc 4',
    status: '0',
    banner: 'https://picsum.photos/1920/600',
    id: '4'
  },
  {
    createdAt: '2023-08-09T16:19:04.675Z',
    name: 'Mr. Homer Deckow',
    slug: 'slug 5',
    logo: 'logo 5',
    about_desc: 'about_desc 5',
    schedule_desc: 'schedule_desc 5',
    vote_rule_desc: 'vote_rule_desc 5',
    reward_desc: 'reward_desc 5',
    status: '0',
    banner: 'https://picsum.photos/1920/600',
    id: '5'
  },
  {
    createdAt: '2023-08-10T03:17:13.427Z',
    name: 'Patty Friesen',
    slug: 'slug 6',
    logo: 'logo 6',
    about_desc: 'about_desc 6',
    schedule_desc: 'schedule_desc 6',
    vote_rule_desc: 'vote_rule_desc 6',
    reward_desc: 'reward_desc 6',
    status: '1',
    banner: 'https://picsum.photos/1920/600',
    id: '6'
  },
  {
    createdAt: '2023-08-09T17:30:30.296Z',
    name: 'Gwendolyn Kuphal',
    slug: 'slug 7',
    logo: 'logo 7',
    about_desc: 'about_desc 7',
    schedule_desc: 'schedule_desc 7',
    vote_rule_desc: 'vote_rule_desc 7',
    reward_desc: 'reward_desc 7',
    status: '2',
    banner: 'https://picsum.photos/1920/600',
    id: '7'
  },
  {
    createdAt: '2023-08-09T11:30:18.964Z',
    name: 'Carole Braun',
    slug: 'slug 8',
    logo: 'logo 8',
    about_desc: 'about_desc 8',
    schedule_desc: 'schedule_desc 8',
    vote_rule_desc: 'vote_rule_desc 8',
    reward_desc: 'reward_desc 8',
    status: '0',
    banner: 'https://picsum.photos/1920/600',
    id: '8'
  }
]

const Events = () => {
  return (
    <>
      <h3 className='pb-5'>開催予定・開催中のイベント</h3>
      <div className='grid grid-cols-1 gap-[30px] md:grid-cols-2'>
        {data
          .filter((item) => item.status === '0')
          .map((item) => (
            <ItemEvent eventImg={item.banner} key={item.id} />
          ))}
      </div>
    </>
  )
}

export default Events
