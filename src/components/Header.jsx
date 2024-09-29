import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CodeIcon from '@mui/icons-material/Code';



function Header() {
  return (
    <div className='flex flex-row items-center justify-between h-10 p-3 mt-5 md:hidden text-gray-400'>
        <div className='flex flex-row gap-4'>
            <Link to='/' className='hover:text-white'><HomeIcon/></Link>
            <Link to='/notifications' className='hover:text-white'><NotificationsIcon/></Link>
            <Link to='/developers' className='hover:text-white'><CodeIcon/></Link>
        </div>
        <div>
            <Link to='/profile' className='hover:text-white flex flex-row items-center gap-2'>
              <div className='w-9 h-9 rounded-full bg-indigo-400'></div>
              
            </Link>
        </div>
    </div>
  )
}

export default Header