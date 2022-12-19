import React from 'react'
import { FaClock } from 'react-icons/fa';
import './Schedule.scss'

const ScheduleList = [
    {
        number: '05',
        title: 'UX/UI Workshop',
        desc: '10 of 45 chapters',
        by: 'Mrs. Wilson',
        time: '14:00'
    },
    {
        number: '06',
        title: 'Interaction Design',
        desc: '5 of 45 chapters',
        by: 'Mrs. Wilson',
        time: '15:00'
    }
];

function Schedule() {
  return (
    <div className='Schedule'>
        <div className='ScheRow'>
            <span>Schedule</span>
            <span>See more</span>
        </div>
        <div className='SchData'>
            {ScheduleList.map((e, index) => {
                return (
                    <div key={`Sch-${index}`} className='SchItem'>
                        <div className='Itemtime'>{e.number}</div>
                        <div className='ItemCol'>
                            <span>{e.title}</span>
                            <span>{e.desc}</span>
                        </div>
                        <div className='time'>
                            <FaClock className='icon' />
                            <span>{e.time}</span>
                            </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Schedule