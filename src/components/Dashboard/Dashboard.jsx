import React from 'react'
import './Dashboard.scss'
import { IoNotifications, IoSettingsSharp } from 'react-icons/io5'
import {BsFillCloudDownloadFill, BsFillCloudUploadFill} from 'react-icons/bs'


function Dashboard() {
  return (
    <div className='Dashboard'>
        <div className='Dashtop'>
            <div className='leftDash'>
                <span>Dashboard</span>
                <span>Welcome back, Rahul</span>
            </div>
            <div className='rightDash'>
                <IoNotifications className='icon' />
                <div className='iconLine'></div>
                <IoSettingsSharp className='icon' />
            </div>
        </div>
        <div className='Dashbottom'>
            <div className='BottLeft'>
                <BsFillCloudDownloadFill className='icon' />
                <div className='rev'>
                    <span>Revenue</span>
                    <span>$950.031</span>
                </div>
            </div>
            <div className='BottRight'>
                <BsFillCloudUploadFill className='icon' />
                <div className='rev'>
                    <span>Expences</span>
                    <span>$234,390</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard