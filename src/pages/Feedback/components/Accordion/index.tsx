import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import './Accordion.scss'
import PlusIcon from '~/common/assets/images/plus.svg'
import MinusIcon from '~/common/assets/images/minus.svg'
import { QuestionsAskedType } from '~/models/feedbackFAQ'

interface DefaultAccordionProps {
  item?: QuestionsAskedType[]
  name?: string
}

const DefaultAccordion = ({ item, name }: DefaultAccordionProps) => {
  const [openAccordions, setOpenAccordions] = React.useState<number[]>([])

  const isAccordionOpen = (id: number) => openAccordions.includes(id)

  const toggleAccordion = (id: number) => {
    if (isAccordionOpen(id)) {
      setOpenAccordions(openAccordions.filter((openId) => openId !== id))
    } else {
      setOpenAccordions([...openAccordions, id])
    }
  }

  return (
    <div className='mb-10'>
      <h3 className='mb-5 border-l-[3px] border-[#0075be] pl-3 text-lg text-[#0075be]'>{name}</h3>
      <div>
        {item?.map((question) => (
          <Accordion
            className='accordion border-blue-gray-100 border-b'
            key={question.id}
            open={isAccordionOpen(question.id)}
            icon={<IconAccordion id={question.id} open={isAccordionOpen(question.id)} />}
          >
            <AccordionHeader
              className='flex-row-reverse justify-end gap-2 py-2 text-base font-light'
              onClick={() => toggleAccordion(question.id)}
            >
              {question.question}
            </AccordionHeader>
            <AccordionBody className='bg-[#FAFAFA] p-4 text-base'>
              <div dangerouslySetInnerHTML={{ __html: question.answer || '' }}></div>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

function IconAccordion({ open }: any) {
  return (
    <>
      {open ? (
        <img className='h-3 w-3' src={MinusIcon} alt='minus' />
      ) : (
        <img className='h-3 w-3' src={PlusIcon} alt='plus' />
      )}
    </>
  )
}

export default DefaultAccordion
