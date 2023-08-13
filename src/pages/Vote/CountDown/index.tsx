import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate.getTime() - currentTime;
      setTimeRemaining(Math.max(0, difference));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return <div className='text-center text-2xl mx-auto mt-7'>
      <span className='text-[#fc2e9e] text-3xl font-bold italic mx-1'>{days}</span><span>日と</span>
      <span className='text-[#fc2e9e] text-3xl font-bold italic mx-1'>{hours % 24}</span><span>時間 </span>
      <span className='text-[#fc2e9e] text-3xl font-bold italic mx-1'>{minutes % 60}</span><span>分 </span>
      <span className='text-[#fc2e9e] text-3xl font-bold italic mx-1'>{seconds % 60}</span><span>秒 </span>
    </div> 
  };

  return (
    <div>
      {formatTime(timeRemaining)}
    </div>
  );
};

export default Countdown;