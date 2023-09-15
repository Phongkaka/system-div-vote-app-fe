import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchEventDetail } from '~/services/eventApi'
import { EventItem } from '~/models/Events'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { eventDetail } from '~/recoil/atom'

interface Props {
  slug?: string
}

const useEventDetails = ({ slug }: Props = {}): any => {
  const { data, isLoading } = useQuery<EventItem>(['eventDetail', slug], () =>
    fetchEventDetail(slug || '')
  )
  const setDetailEvent = useSetRecoilState(eventDetail)
  const event = useRecoilValue(eventDetail)

  useEffect(() => {
    if (data) {
      setDetailEvent(data)
    }
  }, [data, setDetailEvent])

  return [event, isLoading]
}

export default useEventDetails
