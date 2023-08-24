import { PaymentType } from '~/models/profile'
import moment from 'moment'

interface TablePaymentProps {
  data: PaymentType[]
}

const TablePayment = ({ data }: TablePaymentProps) => {
  const handleClickRowTable = (item: PaymentType) => {
    console.log(item)
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
              <td className='table-style'>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePayment
