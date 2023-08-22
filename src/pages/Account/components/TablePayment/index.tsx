import { PaymentType } from '~/models/profile'

interface TablePaymentProps {
  data: PaymentType[]
}

const TablePayment = (props: TablePaymentProps) => {
  const { data } = props

  return (
    <div>
      <div className='relative overflow-x-auto'>
        <table className='min-w-full border-collapse border text-left text-sm text-gray-500'>
          <thead className='text-center text-sm uppercase'>
            <tr>
              <th scope='col' className='table-style w-[5%]'>
                ID
              </th>
              <th scope='col' className='table-style w-[30%]'>
                投票券メニュー
              </th>
              <th scope='col' className='table-style w-[5%]'>
                量
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
            {data?.map((item) => (
              <tr className='text-center' key={item.id}>
                <td className='table-style'>{item.id}</td>
                <td className='table-style'>{item.menu}</td>
                <td className='table-style'>{item.quantity}</td>
                <td className='table-style'>{item.price}</td>
                <td className='table-style'>{item.purchaseDate}</td>
                <td className='table-style'>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePayment
