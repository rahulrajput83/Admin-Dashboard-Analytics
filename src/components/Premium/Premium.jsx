import React from 'react'
import { FaPlay } from 'react-icons/fa'
import './Premium.scss'

function Premium() {
  return (
    <div className='Premium'>
        <span>Meet Premium</span>
        <span>Increase your company's annual revenue</span>
        <div className='circle'>
            <img src='https://www.sandler.com/wp-content/uploads/2022/10/Person-MiddleMale4a-min.png' alt='' />
        </div>
        <div className='icon'><FaPlay /></div>
    </div>
  )
}

export default Premium