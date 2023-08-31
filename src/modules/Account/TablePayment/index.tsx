import { PaymentType } from '~/models/profile'
import moment from 'moment'
import './TablePayment.scss'
import {
  FAILED_STATUS,
  FAILED_STATUS_TEXT,
  PENDING_STATUS,
  PENDING_STATUS_TEXT,
  SUCCEEDED_STATUS,
  SUCCEEDED_STATUS_TEXT
} from '~/constants/status'
import { formatNumberWithCommas } from '~/utils/helper'

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
      <table className='payment-table min-w-full border-collapse border text-left text-sm text-gray-500'>
        <thead className='bg-dark text-center text-sm uppercase lg:text-base'>
          <tr className='payment-table-header'>
            <th scope='col' className='table-th-style w-[5%]'>
              ID
            </th>
            <th scope='col' className='table-th-style w-[20%]'>
              単価
            </th>
            <th scope='col' className='table-th-style w-[20%]'>
              購入日
            </th>
            <th scope='col' className='table-th-style w-[20%]'>
              スターテス
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: PaymentType) => (
            <tr
              onClick={() => handleClickRowTable(item)}
              className='payment-table-body cursor-pointer text-center text-sm hover:bg-white lg:text-base'
              key={item.id}
            >
              <td className='table-td-style'>{item.id}</td>
              <td className='table-td-style'>{formatNumberWithCommas(item.amount as number)}</td>
              <td className='table-td-style'>{moment(item.created_at).format('MM/DD/YYYY')}</td>
              <td className='table-td-style'>{handleGetStatusPayment(item.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePayment
