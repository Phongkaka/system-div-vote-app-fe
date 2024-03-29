import Container from '~/layouts/components/Container'
import useQueryData from '~/hook/useQueryData'
import { fetchFAQ } from '~/services/feedbackApi'
import { AccordionItem } from '~/models/feedbackFAQ'
import DefaultAccordion from '~/modules/Feedback/Accordion'
import FormFeedback from '~/modules/Feedback/FormFeedback'
import { Helmet } from 'react-helmet'

const Feedback = () => {
  const { data: faqData } = useQueryData('FAQ', fetchFAQ)

  return (
    <Container>
      <Helmet>
        <title>お問い合わせ</title>
      </Helmet>
      <div className='mb-10'>
        <h1 className='mb-5 text-2xl font-bold'>よくあるご質問・お問い合わせ</h1>
        <p className='text-base'>
          お問い合わせに先立ち、下記のよくあるご質問（FAQ）をご確認ください。
        </p>
      </div>
      <h2 className='border-left mb-10 text-[22px] font-bold'>よくあるご質問（FAQ）</h2>
      {faqData?.map((item: AccordionItem) => {
        return (
          <DefaultAccordion
            key={item.id}
            item={item?.frequently_asked_questions}
            name={item.name}
          />
        )
      })}
      <h2 className='border-left mb-10 text-[22px] font-bold'>お問い合わせ</h2>
      <FormFeedback />
    </Container>
  )
}

export default Feedback
