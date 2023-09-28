import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import crownIcSecond from '~/common/assets/images/ic_02.png'
import crownIcThirst from '~/common/assets/images/ic_03.png'
import crownIc from '~/common/assets/images/ic_crown.png'
import voteIc from '~/common/assets/images/ic_vote.png'
import { FlowiseCandidate } from '~/models/candidates'
import { fetchSupporters } from '~/services/candidatesAPI'
import { FetchUseMe } from '~/services/userApi'
import { userInfo } from '~/recoil/atom/auth'
import { useRecoilValue } from 'recoil'
import { errorType, resType } from '~/models/response'
import { SUCCESS_CODE } from '~/constants/code'
import { Flowise } from '~/models/auth'
import InputForward from '~/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { initVoteValues, voteValidate } from '~/common/validation/vote/config'
import { useMutationVote } from '~/hook/useMutation'
import { ReactComponent as LoadingIcon } from '~/common/assets/images/loading.svg'
import { DialogVoteError } from '~/components/Dialog'
import Modal from '~/components/Modal'
import LoadingSkeleton from '~/components/LoadingSkeleton'
import clsx from 'clsx'
import { FINISHED_STATUS } from '~/constants/status'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import './Candidate.scss'

interface Props {
  id?: number
  numberVote?: number
  numRank?: number
  nameCandidate?: string | undefined
  nameCandidateDetail?: string | undefined
  candidateImg?: string | undefined
  social_links?: FlowiseCandidate.ISocialLink[]
  refreshCandidate?: () => void
  status?: number
  candidate_photos?: FlowiseCandidate.ICandidatePhotos[]
  minimum_vote?: number
}

const Candidate = ({
  id,
  numberVote,
  numRank,
  nameCandidate,
  candidateImg,
  nameCandidateDetail,
  social_links,
  refreshCandidate,
  status,
  candidate_photos,
  minimum_vote
}: Props) => {
  const user = useRecoilValue(userInfo)
  const isAuthenticated = !!user?.access_token
  const [modalSupporterOpen, setModalSupporterOpen] = useState(false)
  const navigate = useNavigate()
  const [voteModalOpen, setVoteModalOpen] = useState(false)
  const [messageError, setMessageError] = useState<errorType>({})
  const [isOpenModalErrorVote, setIsOpenModalErrorVote] = useState(false)
  const [openPhotos, setOpenPhotos] = useState(false)
  const [listPhoto, setListPhoto] = useState<{ src: string }[]>([])

  const [listSupporters, setListSupporters] = useState<FlowiseCandidate.ISupporterResponse | null>(
    null
  )
  const [useMe, setUserMe] = useState<Flowise.IUserMe | null>(null)

  const [loadingSupporters, setLoadingSupporters] = useState(false) // Control loading state
  const { mutate: voteAction, isSuccess, isError, error } = useMutationVote()

  const methods = useForm({
    mode: 'all',
    defaultValues: initVoteValues,
    resolver: yupResolver(voteValidate)
  })

  const { errors, isSubmitting } = methods.formState
  const { register, handleSubmit } = methods

  const openModal = () => {
    setModalSupporterOpen(true)
  }

  const closeModal = () => {
    setModalSupporterOpen(false)
  }

  const handleShowSupporters = async () => {
    openModal()

    if (loadingSupporters || id === undefined) {
      return
    }

    setLoadingSupporters(true)

    try {
      const supportersData = await fetchSupporters(id)
      setListSupporters(supportersData)
    } catch (error) {
      console.error('Error fetching supporters', error)
    }

    setLoadingSupporters(false)
  }

  const handleClickVote = async () => {
    setVoteModalOpen(true)
    if (isAuthenticated) {
      try {
        const userData: resType = await FetchUseMe()
        if (userData && userData.code === SUCCESS_CODE) {
          setUserMe(userData.data)
        }
      } catch (error) {
        console.error('Error fetching user me data', error)
      }
    } else {
      navigate('/login')
    }
  }

  const onSubmitVote = (data: { number_points: number | null }) => {
    voteAction({
      number_points: data.number_points,
      candidate_id: id
    })
    methods.reset()
  }

  useEffect(() => {
    if (isSuccess) {
      setVoteModalOpen(false)
      refreshCandidate && refreshCandidate()
    }
    if (isError && error) {
      setMessageError(error as errorType)
      setIsOpenModalErrorVote(true)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, error])

  const handleClickAvatar = () => {
    if (candidate_photos && candidate_photos?.length > 0) {
      setOpenPhotos(true)
      const slides = candidate_photos.map((item) => ({ src: item.name }))
      setListPhoto(slides as any)
    } else {
      setOpenPhotos(true)
      const slides = [{ src: candidateImg }]
      setListPhoto(slides as any)
    }
  }

  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    setValue(newValue)
  }
  return (
    <>
      <Lightbox
        open={openPhotos}
        close={() => setOpenPhotos(false)}
        slides={listPhoto}
        plugins={candidate_photos && candidate_photos?.length !== 0 ? [Thumbnails] : []}
      />
      <div className='candidate__user relative m-auto my-8 flex justify-between rounded-lg bg-white px-7 pb-8 pt-12'>
        <div className='left__candidate mr-2 flex w-1/3 flex-wrap items-center justify-center'>
          <div
            className='mb-4 block w-[122px] cursor-pointer hover:opacity-80'
            onClick={handleClickAvatar}
          >
            <img className='w-full rounded-md' src={candidateImg} alt='candidate' />
          </div>
          <div className='bottom__link flex w-2/3 justify-center'>
            {social_links?.map((social) => (
              <Link key={social.id} target='_blank' to={social.link} className='mr-2 block h-7 w-7'>
                <img src={social.social_type.logo} />
              </Link>
            ))}
          </div>
        </div>
        <div className='right__candidate w-2/3'>
          <p className='name__candidate absolute left-0 top-0 mb-4 rounded-br-lg rounded-tl-lg bg-dark px-2 py-1'>
            <span className='px-4 py-1 text-white'>{nameCandidate}</span>
          </p>
          <span className='mb-1 block truncate text-xl font-semibold text-black'>
            {nameCandidateDetail} <i className='text-sm not-italic'>さん</i>
          </span>
          <div className='rank__candidate mb-4 flex'>
            <span className='mr-4 flex items-center font-bold text-black'>
              <img className='mr-2 h-[15px] w-[18px]' src={crownIc} alt='icon' />{' '}
              <i className='font-bold not-italic'>{numRank}</i>位
            </span>
            <span className='flex items-center font-bold text-black'>
              <img className='mr-2' src={voteIc} alt='icon' />{' '}
              <i className='not-italic'>{numberVote}</i>票
            </span>
          </div>
          <div className='group__btn flex flex-wrap'>
            <button
              disabled={status === FINISHED_STATUS}
              onClick={handleClickVote}
              className={clsx(
                'mb-4 flex h-10 w-[271px] items-center justify-center rounded-[9px] p-1',
                status === FINISHED_STATUS
                  ? 'cursor-not-allowed border-[#999999] bg-[#cccccc] text-[#666666]'
                  : 'button-hover cursor-pointer bg-black text-white'
              )}
            >
              <span className='text-sm font-bold'>投票する</span>
            </button>
            <button
              onClick={handleShowSupporters}
              className='flex h-[40px] w-[172px] cursor-pointer items-center justify-center rounded-[9px] border-dark bg-[#F2F2F4] p-1 text-black'
            >
              <span className='text-sm'>サポーターランキング</span>
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={modalSupporterOpen} onClose={closeModal} classWrapper='w-full lg:w-[1024px]'>
        <div className='flex flex-wrap justify-center'>
          <h3 className='mb-10 text-lg font-bold text-black lg:text-[22px]'>
            ダミーお名前 <i className='mr-4 text-sm not-italic'>さん</i> サポーターTOP3
          </h3>
          <ul className='top__supporter mb-10 flex w-full flex-wrap justify-center'>
            {loadingSupporters ? (
              <LoadingIcon />
            ) : (
              listSupporters?.map((item: FlowiseCandidate.ISupporters, index: number) => {
                const crownIcons = [crownIc, crownIcSecond, crownIcThirst]

                return (
                  <li
                    key={item.user?.id}
                    className='mb-5 flex w-full justify-center text-xl font-bold'
                  >
                    <div className='flex items-center'>
                      {index < 3 && (
                        <img
                          className='mr-2 h-[15px] w-[18px]'
                          src={crownIcons[index]}
                          alt={`top${index + 1}`}
                        />
                      )}

                      <span>{index + 1}位</span>
                    </div>
                    <span className='ml-4'>{item.user?.name} さん</span>
                  </li>
                )
              })
            )}
          </ul>
        </div>
      </Modal>
      <Modal isOpen={voteModalOpen} onClose={() => setVoteModalOpen(false)}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitVote)} className='m-auto flex w-full flex-col'>
            <ul>
              <li>
                <p className='text-lg'>
                  名前: <span className='font-bold'>{nameCandidateDetail}</span>{' '}
                  <i className='text-sm not-italic'>さん</i>
                </p>
              </li>
              <li>
                <p className='text-lg'>現在のポイント: {useMe?.point ? useMe?.point : 0}</p>
              </li>
              <li className='mt-[-3px]'>
                {minimum_vote && (
                  <span className='text-xs italic text-pink'>最低投票数: {minimum_vote}</span>
                )}
              </li>
            </ul>
            <div className='mb-7'>
              <InputForward
                {...register('number_points')}
                error={!!errors?.number_points}
                helperText={errors?.number_points?.message}
                className='mt-1 block h-[40px] w-full rounded-[10px] border-2 border-solid border-black px-5'
                placeholder={'ポイント'}
                type='text'
                value={value}
                onChange={handleChange}
              />
            </div>
            <button
              disabled={isSubmitting}
              type='submit'
              className='button-hover block h-[48px] rounded-lg bg-green px-5 font-bold text-black'
            >
              投票する
            </button>
          </form>
        </FormProvider>
      </Modal>
      <DialogVoteError
        isOpen={isOpenModalErrorVote}
        setClose={() => setIsOpenModalErrorVote(false)}
        messageError={messageError?.message}
      />
    </>
  )
}

const CandidateLoading = () => {
  return (
    <div className='candidate__user relative m-auto my-8 flex justify-between rounded-lg bg-white px-7 pb-8 pt-12'>
      <div className='left__candidate mr-2 flex w-1/3 flex-wrap items-center justify-center'>
        <div className='mb-4 block w-[122px]'>
          <LoadingSkeleton className='h-[122px] w-full' />
        </div>
        <div className='bottom__link flex w-2/3 justify-center'>
          <LoadingSkeleton className='h-7 w-7' />
        </div>
      </div>
      <div className='right__candidate w-2/3'>
        <div className='name__candidate absolute left-0 top-0 mb-4 rounded-br-lg rounded-tl-lg px-2 py-1'>
          <LoadingSkeleton className='h-[20px] w-[100px]' />
        </div>
        <span className='mb-1 block truncate text-xl font-semibold text-black'>
          <LoadingSkeleton className='mb-2 h-[20px] w-[100px]' />
        </span>
        <div className='rank__candidate mb-4 flex'>
          <span className='mr-4 flex items-center font-bold text-black'>
            <LoadingSkeleton className='h-[20px] w-[40px]' />
          </span>
          <span className='flex items-center font-bold text-black'>
            <LoadingSkeleton className='h-[20px] w-[40px]' />
          </span>
        </div>
        <div className='group__btn flex flex-wrap'>
          <LoadingSkeleton className='mb-4 h-[40px] w-full' />
          <LoadingSkeleton className='h-[40px] w-[150px]' />
        </div>
      </div>
    </div>
  )
}

Candidate.CandidateLoading = CandidateLoading

export default Candidate
