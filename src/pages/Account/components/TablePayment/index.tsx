import { PaymentType } from '~/models/profile'
import moment from 'moment'
import {
  FAILED_STATUS,
  FAILED_STATUS_TEXT,
  PENDING_STATUS,
  PENDING_STATUS_TEXT,
  SUCCEEDED_STATUS,
  SUCCEEDED_STATUS_TEXT
} from '~/constants/status'

interface TablePaymentProps {
  data: PaymentType[]
}

const TablePayment = ({ data }: TablePaymentProps) => {
  const handleClickRowTable = (item: PaymentType) => {
    console.log(item)
  }

  const handleGetStatusPayment = (status: number | undefined) => {
    switch (status) {
      case PENDING_STATUS:
        return PENDING_STATUS_TEXT
      case SUCCEEDED_STATUS:
        return SUCCEEDED_STATUS_TEXT
      case FAILED_STATUS:
        return FAILED_STATUS_TEXT
      default:
        break
    }
  }

  return (
    <div className='relative overflow-x-auto'>
      <table className='min-w-full border-collapse border text-left text-sm text-gray-500'>
        <thead className='text-center text-sm uppercase'>
          <tr>
            <th scope='col' className='table-style w-[5%]'>
              ID
            </th>
            <th scope='col' className='table-style w-[20%]'>
              単価
            </th>
            <th scope='col' className='table-style w-[20%]'>
              購入日
            </th>
            <th scope='col' className='table-style w-[20%]'>
              スターテス
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: PaymentType) => (
            <tr
              onClick={() => handleClickRowTable(item)}
              className='cursor-pointer text-center hover:bg-white'
              key={item.id}
            >
              <td className='table-style'>{item.id}</td>
              <td className='table-style'>{item.amount}</td>
              <td className='table-style'>{moment(item.created_at).format('MM/DD/YYYY')}</td>
              <td className='table-style'>{handleGetStatusPayment(item.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePayment
