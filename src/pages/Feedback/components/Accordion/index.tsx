import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import './Accordion.scss'
import PlusIcon from '~/common/assets/images/plus.svg'
import MinusIcon from '~/common/assets/images/minus.svg'
import { AccordionItem } from '~/models/feedbackFAQ'

interface DefaultAccordionProps {
  items: AccordionItem[]
  title?: string
}

const DefaultAccordion = ({ items, title }: DefaultAccordionProps) => {
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
      <h3 className='mb-5 border-l-[3px] border-[#0075be] pl-3 text-lg text-[#0075be]'>{title}</h3>
      <div>
        {items?.map((item) => (
          <Accordion
            className='accordion border-blue-gray-100 border-b'
            key={item.id}
            open={isAccordionOpen(item.id)}
            icon={<IconAccordion id={item.id} open={isAccordionOpen(item.id)} />}
          >
            <AccordionHeader
              className='flex-row-reverse justify-end gap-2 py-2 text-base font-light'
              onClick={() => toggleAccordion(item.id)}
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className='bg-[#FAFAFA] p-4 text-base'>{item.content}</AccordionBody>
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
