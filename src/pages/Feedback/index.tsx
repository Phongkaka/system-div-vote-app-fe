import Container from '~/layouts/components/Container'
import DefaultAccordion from './components/Accordion'
import FormFeedback from './components/FormFeedback'
import useQueryData from '~/hook/useQueryData'
import { fetchFAQ } from '~/services/feedbackApi'
import { AccordionItem } from '~/models/feedbackFAQ'

const Feedback = () => {
  const { data: faqData } = useQueryData('FAQ', fetchFAQ)

  return (
    <Container>
      <div className='mb-10'>
        <h1 className='mb-5 text-4xl'>よくあるご質問・お問い合わせ</h1>
        <p className='text-base text-[#121212BF]'>
          お問い合わせに先立ち、下記のよくあるご質問（FAQ）をご確認ください。
        </p>
      </div>
      <h2 className='mb-10 border-b-[2px] border-[#e9538a] pb-2 text-2xl font-light text-[#e9538a]'>
        よくあるご質問（FAQ）
      </h2>
      {faqData?.map((item: AccordionItem) => {
        return <DefaultAccordion item={item?.frequently_asked_questions} name={item.name} />
      })}
      <h2 className='mb-10 border-b-[2px] border-[#e9538a] pb-2 text-2xl font-light text-[#e9538a]'>
        お問い合わせ
      </h2>
      <p className='mb-10 font-light leading-7'>
        お問い合わせフォームは、24時間受け付けております。
        <br />
        営業時間は平日11:00～18:00となります。
        <br />
        営業時間外に頂いたお問い合わせは翌営業日以降のご返信となる場合がございますので予めご了承ください。
      </p>
      <FormFeedback />
    </Container>
  )
}

export default Feedback
