import {
  PaymentType,
  PurchaseDetailsType,
  VoteDetailsType,
  VoteHistoryType
} from '~/models/profile'
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
import { formatNumberWithCommas, sortDataByIdAscending } from '~/utils/helper'
import Modal from '~/components/Modal'
import { useState } from 'react'
import LoadingSkeleton from '~/components/LoadingSkeleton'

interface TablePaymentProps {
  dataPurchase: PaymentType[]
  dataVote: VoteHistoryType
  tabTable?: number
}

const columnsPurChase = ['ID', '単価', '購入日', 'ステータス']
const columnsVote = ['ID', '名前', 'スコア', '購入日']

const TablePayment = ({ dataPurchase, dataVote, tabTable }: TablePaymentProps) => {
  const [isOpenModal, setOpenModal] = useState(false)
  const [purchaseDetails, setPurchaseDetails] = useState<PurchaseDetailsType[]>()

  const columns = tabTable === 0 ? columnsPurChase : columnsVote

  const purchaseSort = sortDataByIdAscending(dataPurchase)
  const voteHistorySort = sortDataByIdAscending(dataVote?.data || [])
  const purchaseDetailsSort = sortDataByIdAscending(purchaseDetails || [])

  const handleClickRowTable = (item: PaymentType) => {
    if (tabTable === 0) {
      setPurchaseDetails(item.point_purchase_details)
      setOpenModal(true)
    }
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
    <>
      <div className='relative max-h-[700px] overflow-x-auto'>
        <table className='payment-table min-w-full border-collapse border text-left text-sm text-gray-500'>
          <thead className='bg-dark text-center text-sm uppercase lg:text-base'>
            <tr className='payment-table-header'>
              {columns.map((column, index) => (
                <th scope='col' className='table-th-style' key={index}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabTable === 0 &&
              purchaseSort?.map((item: PaymentType) => (
                <tr
                  onClick={() => handleClickRowTable(item)}
                  className='payment-table-body cursor-pointer text-center text-sm hover:bg-white lg:text-base'
                  key={item.id}
                >
                  <td className='table-td-style'>{item.id}</td>
                  <td className='table-td-style'>
                    {formatNumberWithCommas(item.amount as number)}
                  </td>
                  <td className='table-td-style'>{moment(item.created_at).format('MM/DD/YYYY')}</td>
                  <td className='table-td-style'>{handleGetStatusPayment(item.status)}</td>
                </tr>
              ))}

            {tabTable === 1 &&
              voteHistorySort?.map((item: VoteDetailsType) => (
                <tr
                  className='payment-table-body cursor-pointer text-center text-sm hover:bg-white lg:text-base'
                  key={item.id}
                >
                  <td className='table-td-style'>{item.id}</td>
                  <td className='table-td-style'>{item?.candidate?.name}</td>
                  <td className='table-td-style'>{item?.point_vote}</td>
                  <td className='table-td-style'>{moment(item.created_at).format('MM/DD/YYYY')}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal
        // disableButton
        isOpen={isOpenModal}
        onClose={() => setOpenModal(false)}
        classWrapper='sm:p-[25px] w-full lg:w-[1024px]'
      >
        <div style={{ width: '100%' }} className='mt-3 max-h-[500px] w-full overflow-x-auto'>
          <table className='payment-table w-full border-collapse border text-left text-sm text-gray-500'>
            <thead className='bg-dark text-center text-sm uppercase lg:text-base'>
              <tr className='payment-table-header'>
                <th scope='col' className='table-th-style w-[10%]'>
                  ID
                </th>
                <th scope='col' className='table-th-style w-[50%]'>
                  名前
                </th>
                <th scope='col' className='table-th-style w-[20%]'>
                  単価
                </th>
                <th scope='col' className='table-th-style w-[20%]'>
                  量
                </th>
              </tr>
            </thead>
            <tbody>
              {purchaseDetailsSort?.map((item: PurchaseDetailsType) => (
                <tr
                  className='payment-table-body cursor-pointer text-center text-sm hover:bg-white lg:text-base'
                  key={item.id}
                >
                  <td className='table-td-style'>{item?.id}</td>
                  <td className='table-td-style'>{item.point_type?.name}</td>
                  <td className='table-td-style'>{item.point_type?.price}</td>
                  <td className='table-td-style'>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  )
}

const Loading = () => {
  return (
    <>
      <LoadingSkeleton className='mb-1 h-[30px] w-full' />
      <LoadingSkeleton className='h-[200px] w-full' />
    </>
  )
}

TablePayment.Loading = Loading

export default TablePayment
