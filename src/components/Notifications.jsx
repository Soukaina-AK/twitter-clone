import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

//DONE

function Notifications() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl'>Notifications</h1>
      <div id='notifications' className='px-6 flex flex-col gap-4'>
        
        <Notif/>
        <Notif/>
        <Notif/>
        <Notif/>
        <Notif/>
        <Notif/>
       

      </div>
    </div>
  )
}

export default Notifications

//extra components

const Notif = () => {
  return(
    <div id='notif' className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-3'>
        <div className='h-14 w-14 rounded-full bg-indigo-400'></div>
        <div className='flex flex-col'>
          <h2>Soukaina Akaroum</h2>
          <div className='flex flex-row items-center gap-2 text-sm'>
            <p>Shared a post.</p>
            <span>18h</span>
          </div>
        </div>
      </div>

      <div>
        <MoreHorizIcon/>
      </div>
    </div>
  )
}