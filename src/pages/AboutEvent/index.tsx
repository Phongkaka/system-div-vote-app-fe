import bannerImg from '~/common/assets/images/event-02.jpg'
import { Link } from 'react-router-dom'
import ScheduleEvent from './ScheduleEvent'
import Container from '~/layouts/components/Container'
import Banner from '~/layouts/components/Banner'

function AboutEvent() {
  return (
    <Container>
      <div className='upcoming__event--page'>
        <Banner img={bannerImg} />
        <div className='name__event__time border-b border-[#ccc] pb-8'>
          <h2 className='mx-auto mb-2 block text-center text-3xl font-bold text-[#fc2e9e]'>
            投票（決勝）開催中！
          </h2>
          <span className='block text-center text-2xl font-bold text-[#fc2e9e]'>
            2023年08月10日(木) 16:00〜2023年08月16日(水) 19:00
          </span>
          <Link
            to='#'
            className='mx-auto mt-5 block w-64 rounded-[30px] border border-[#fc2e9e] bg-[#fc2e9e] px-8 py-2 text-center text-sm text-white transition-[0.3s] hover:bg-[#fff] hover:text-[#fc2e9e]'
          >
            投票ページへ
          </Link>
        </div>
        <div className='about__content border-b border-[#ccc] py-8'>
          <h2 className='mx-auto mb-8 block text-center text-3xl font-bold text-[#fc2e9e]'>
            ABOUT
          </h2>
          <span className='detail-about mb-1 block text-[#473a3a]'>
            こちらはミス浴衣ジェニック2024の投票特設サイトです。
          </span>
          <span className='detail-about mb-1 block text-[#473a3a]'>
            花火にお祭り、かき氷。クラシックな柄からレースやチュールのコーデまで。
          </span>
          <span className='detail-about mb-1 block text-[#473a3a]'>
            ミス浴衣ジェニックは、浴衣・着物を取り巻く事業者と連携し、浴衣の可愛さを発信する「夏を彩るアイコン」を発掘するオーディションです。
          </span>
          <span className='detail-about mb-1 block text-[#473a3a]'>
            浴衣文化を世界に発信する写真集の公式モデルやWEBメディアでの記事掲載、浴衣・着物ブランドのモデル推薦など、豪華プライズをご用意しております。
          </span>
          <span className='detail-about block text-[#473a3a]'>
            是非応援のほどよろしくお願いいたします。
          </span>
          <Link
            to='#'
            className='mx-auto mt-5 block w-64 rounded-[30px] border border-[#fc2e9e] bg-[#fc2e9e] px-8 py-2 text-center text-sm text-white transition-[0.3s] hover:bg-[#fff] hover:text-[#fc2e9e]'
          >
            公式ページ
          </Link>
          <Link
            to='#'
            className='mx-auto mt-5 block w-64 rounded-[30px] border border-[#00acee] bg-[#00acee] px-8 py-2 text-center text-sm text-white transition-[0.3s] hover:bg-[#fff] hover:text-[#00acee]'
          >
            Twitter
          </Link>
        </div>
        <div className='schedule__content border-b border-[#ccc] py-8'>
          <h2 className='mx-auto mb-8 block text-center text-3xl font-bold text-[#fc2e9e]'>
            スケジュール
          </h2>
          <ScheduleEvent name='候補者開示' time='7月28日(金)18:00' />
          <ScheduleEvent
            name='予選投票期間'
            time='8月3日(木)18:00〜8月7日(月)21:00'
            note='※投票券販売は8月7日(月)19:00まで'
          />
          <ScheduleEvent name='決勝進出者開示' time='8月9日(水)18:00' />
          <ScheduleEvent
            name='決勝投票期間'
            time='8月10日(木)18:00〜8月16日(水)21:00'
            note='※投票券販売は8月16日(水)19:00まで'
          />
        </div>
        <div className='game__rules border-b border-[#ccc] py-8'>
          <h2 className='mx-auto mb-8 block text-center text-3xl font-bold text-[#fc2e9e]'>
            投票ルール
          </h2>
          <span className='rules-main'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta perferendis,
            voluptatum, obcaecati, quasi architecto et beatae aut velit iure molestiae ipsum.
            Debitis at voluptatem possimus perspiciatis eligendi velit reiciendis!
          </span>
        </div>
        <div className='test__content border-b border-[#ccc] py-8'>
          <h2 className='mx-auto mb-8 block text-center text-3xl font-bold text-[#fc2e9e]'>
            審査内容
          </h2>
          <span className='test-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta perferendis,
            voluptatum, obcaecati, quasi architecto et beatae aut velit iure molestiae ipsum.
            Debitis at voluptatem possimus perspiciatis eligendi velit reiciendis!
          </span>
        </div>
        <div className='reward border-b border-[#ccc] py-8'>
          <h2 className='mx-auto mb-8 block text-center text-3xl font-bold text-[#fc2e9e]'>
            プライズ
          </h2>
          <span className='reward-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta perferendis,
            voluptatum, obcaecati, quasi architecto et beatae aut velit iure molestiae ipsum.
            Debitis at voluptatem possimus perspiciatis eligendi velit reiciendis!
          </span>
        </div>
      </div>
    </Container>
  )
}

export default AboutEvent
