import React, { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: Date
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0)
  const [eventEnded, setEventEnded] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime()
      const difference = targetDate.getTime() - currentTime
      setTimeRemaining(Math.max(0, difference))

      if (difference <= 0) {
        setEventEnded(true)
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    return (
      <div className='mx-auto text-left text-2xl'>
        <span className='mx-1 text-3xl font-bold not-italic'>{days}</span>
        <span>日と</span>
        <span className='mx-1 text-3xl font-bold not-italic'>{hours % 24}</span>
        <span>時間 </span>
        <span className='mx-1 text-3xl font-bold not-italic'>{minutes % 60}</span>
        <span>分 </span>
        <span className='mx-1 text-3xl font-bold not-italic'>{seconds % 60}</span>
        <span>秒 </span>
      </div>
    )
  }

  return (
    <div>
      {eventEnded ? (
        <div className='text-2xl'>イベントは終了しました</div>
      ) : (
        formatTime(timeRemaining)
      )}
    </div>
  )
}

export default Countdown
