interface Props {
  name?: string | undefined
  time?: string | undefined
  note?: string | undefined
}
const ScheduleEvent = ({ name, time, note }: Props) => {
  return (
    <div className="schedule__item pb-6">
      <span className="name-event block text-base font-bold">{name}</span>
      <span className="time-event text-[#473a3a] block">{time}</span>
      <span className="time-event text-[#473a3a] block">{note}</span>
    </div>
  )
}

export default ScheduleEvent
