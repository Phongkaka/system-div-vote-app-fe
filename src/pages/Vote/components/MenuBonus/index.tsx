import item_menu from '~/common/assets/images/item_01.webp'
interface Props {
  title?: string | undefined
}

const MenuBonus = ({ title }: Props) => {
  return (
    <div className='mb-12 flex justify-center'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-[180px]'>
          <img src={item_menu} alt='bonus img' />
        </div>
        <div className='flex w-full flex-wrap justify-center'>
          <span className='name__item--bonus block w-full text-center'>
            シャンパンハーフ <i className='pl-1 font-bold not-italic'>113票分【13% up】</i>
          </span>
          <span className='price__gift block py-3 text-center'>¥11,000</span>
        </div>
        <button className='add-to-card rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>
          カートへ追加
        </button>
      </div>
    </div>
  )
}

export default MenuBonus
