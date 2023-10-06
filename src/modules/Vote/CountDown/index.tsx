import { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: Date | undefined
  startDate: Date | undefined
  setStartEvent?: (value: boolean) => void
}

const Countdown = ({ targetDate, startDate, setStartEvent }: CountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0)
  const [eventEnded, setEventEnded] = useState<boolean>(false)

  useEffect(() => {
    if (!targetDate) return

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime()
      const dateStart = startDate && startDate.getTime()
      let toggleCountDown = startDate && startDate.getTime() > currentTime

      if (toggleCountDown) {
        setStartEvent && setStartEvent(false)
        if (dateStart) {
          const difference = dateStart - currentTime
          if (difference <= 0) {
            clearInterval(intervalId)
            toggleCountDown = false
          } else {
            setTimeRemaining(Math.max(0, difference))
          }
        }
      } else {
        setStartEvent && setStartEvent(true)
        const difference = targetDate.getTime() - currentTime
        if (difference <= 0) {
          setEventEnded(true)
          clearInterval(intervalId)
        } else {
          setTimeRemaining(Math.max(0, difference))
        }
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [targetDate, setStartEvent, startDate])

  const calculateTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    return { days, hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 }
  }

  const time = calculateTime(timeRemaining)

  return (
    <div>
      {eventEnded ? (
        <div className='text-2xl'>イベントは終了しました</div>
      ) : (
        <div className='mx-auto text-left text-2xl'>
          <span className='mx-1 text-3xl font-bold not-italic'>{time.days}</span>
          <span>日と</span>
          <span className='mx-1 text-3xl font-bold not-italic'>{time.hours}</span>
          <span>時間 </span>
          <span className='mx-1 text-3xl font-bold not-italic'>{time.minutes}</span>
          <span>分 </span>
          <span className='mx-1 text-3xl font-bold not-italic'>{time.seconds}</span>
          <span>秒 </span>
        </div>
      )}
    </div>
  )
}

export default Countdown
