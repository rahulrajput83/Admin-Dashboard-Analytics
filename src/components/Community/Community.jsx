import React from 'react'
import './Community.scss'
import { IoAddOutline } from 'react-icons/io5'

function Community() {
  return (
    <div className='Community'>
        <div className='Img'>
            <img src='https://www.freecodecamp.org/news/content/images/2022/02/adnan-min.jpeg' alt='' />
            <img src='https://www.freecodecamp.org/news/content/images/2022/02/adnan-min.jpeg' alt='' />
            <div className='icon'>
            <IoAddOutline />
            </div>
        </div>
        <span>Join the community and find out more</span>
    </div>
  )
}

export default Community