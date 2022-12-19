import React from 'react'
import './Menu.scss'

const menu = ["Dashboard", "Insights", "Reports", "Comments", "Channels"]

function Menu() {
  return (
    <div className='Menu'>
        {menu.map((e, index) => {
            return <span className='menuItem' key={`menu-${index}`}>{e}</span>
        })}
    </div>
  )
}

export default Menu