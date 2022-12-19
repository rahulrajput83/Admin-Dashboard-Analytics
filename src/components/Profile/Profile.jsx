import React from 'react'
import './Profile.scss'
import { FaStar } from 'react-icons/fa'

function Profile() {
  return (
    <div className='Profile'>
        <img src='https://www.freecodecamp.org/news/content/images/2022/02/adnan-min.jpeg' alt='' />
        <span>Rahul Rajput</span>
        <span className='rating'>
            <FaStar className='icon' />
            4.8
            </span>
    </div>
  )
}

export default Profile