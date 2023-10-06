import { useEffect, useState } from 'react'
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
  const [isStartEvent, setStartEvent] = useState<boolean>(true)

  useEffect(() => {
    if (data) {
      setDetailEvent(data)
      if (data.start_time) {
        const currentTime = new Date().getTime()
        setStartEvent(new Date(data.start_time).getTime() > currentTime)
      }
    }
  }, [data, setDetailEvent, setStartEvent])

  return [event, isLoading, isStartEvent]
}

export default useEventDetails
