import bannerImg from "~/common/assets/images/event-02.jpg"
import { Link } from "react-router-dom"
import ScheduleEvent from "./ScheduleEvent"
import Container from "~/layouts/components/Container"
import Banner from "~/layouts/components/Banner"

function UpcomingEvent() {
  return (
    <Container>
      <div className='upcoming__event--page'>
        <Banner img={bannerImg} />
        <div className="name__event__time pb-8 border-b border-[#ccc]">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-2">投票（決勝）開催中！</h2>
          <span className="text-[#fc2e9e] font-bold block text-center text-2xl">2023年08月10日(木) 16:00〜2023年08月16日(水) 19:00</span>
          <Link to="#" className="hover:text-[#fc2e9e] hover:bg-[#fff] transition-[0.3s] text-center w-64 block mx-auto text-sm mt-5 px-8 py-2 bg-[#fc2e9e] border border-[#fc2e9e] rounded-[30px] text-white">投票ページへ</Link>
        </div>
        <div className="about__content py-8 border-b border-[#ccc]">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-8">ABOUT</h2>
          <span className="detail-about block text-[#473a3a] mb-1">
            こちらはミス浴衣ジェニック2024の投票特設サイトです。
          </span>
          <span className="detail-about block text-[#473a3a] mb-1">
            花火にお祭り、かき氷。クラシックな柄からレースやチュールのコーデまで。
          </span>
          <span className="detail-about block text-[#473a3a] mb-1">
            ミス浴衣ジェニックは、浴衣・着物を取り巻く事業者と連携し、浴衣の可愛さを発信する「夏を彩るアイコン」を発掘するオーディションです。
          </span>
          <span className="detail-about block text-[#473a3a] mb-1">
            浴衣文化を世界に発信する写真集の公式モデルやWEBメディアでの記事掲載、浴衣・着物ブランドのモデル推薦など、豪華プライズをご用意しております。
          </span>
          <span className="detail-about block text-[#473a3a]">
            是非応援のほどよろしくお願いいたします。
          </span>
          <Link to="#" className="hover:text-[#fc2e9e] hover:bg-[#fff] transition-[0.3s] text-center w-64 block mx-auto text-sm mt-5 px-8 py-2 bg-[#fc2e9e] border border-[#fc2e9e] rounded-[30px] text-white">公式ページ</Link>
          <Link to="#" className="hover:text-[#00acee] hover:bg-[#fff] transition-[0.3s] text-center w-64 block mx-auto text-sm mt-5 px-8 py-2 bg-[#00acee] border border-[#00acee] rounded-[30px] text-white">Twitter</Link>
        </div>
        <div className="schedule__content py-8 border-b border-[#ccc]">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-8">スケジュール</h2>
          <ScheduleEvent name="候補者開示" time="7月28日(金)18:00" />
          <ScheduleEvent name="予選投票期間" time="8月3日(木)18:00〜8月7日(月)21:00" note="※投票券販売は8月7日(月)19:00まで" />
          <ScheduleEvent name="決勝進出者開示" time="8月9日(水)18:00" />
          <ScheduleEvent name="決勝投票期間" time="8月10日(木)18:00〜8月16日(水)21:00" note="※投票券販売は8月16日(水)19:00まで" />
        </div>
        <div className="game__rules py-8 border-b border-[#ccc]">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-8">投票ルール</h2>
          <span className="rules-main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta perferendis, voluptatum,
            obcaecati, quasi architecto et beatae aut velit iure molestiae ipsum. Debitis at voluptatem possimus perspiciatis eligendi velit reiciendis!
          </span>
        </div>
        <div className="test__content py-8 border-b border-[#ccc]">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-8">審査内容</h2>
          <span className="test-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta perferendis, voluptatum,
            obcaecati, quasi architecto et beatae aut velit iure molestiae ipsum. Debitis at voluptatem possimus perspiciatis eligendi velit reiciendis!
          </span>
        </div>
        <div className="reward py-8 border-b border-[#ccc]">
          <h2 className="text-[#fc2e9e] font-bold block text-center text-3xl mx-auto mb-8">プライズ</h2>
          <span className="reward-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta perferendis, voluptatum,
            obcaecati, quasi architecto et beatae aut velit iure molestiae ipsum. Debitis at voluptatem possimus perspiciatis eligendi velit reiciendis!
          </span>
        </div>


      </div>
    </Container>
  )
}

export default UpcomingEvent
