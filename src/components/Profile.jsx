import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

//DONE

function Profile() {
  return (
    <div className='md:hidden flex flex-col items-center gap-10 sm:px-5'>
      <div className='self-end'><LogoutIcon/></div>
      <div className='flex flex-col items-center gap-5'>
        <div className='w-24 h-24 rounded-full bg-indigo-500'></div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl'>Soukaina Akaroum</h1>
          <h6 className='text-gray-300'>Soukyy-123</h6>
        </div>
        <p className='text-center px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quas nam provident laudantium iusto!</p>
        <button className='bg-btnColor w-28 h-10 rounded-lg'>Edit</button>
        </div>
    </div>
  )
}

export default Profile