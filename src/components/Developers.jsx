import React from 'react';
import MessageIcon from '@mui/icons-material/Message';

function Developers() {
  return (
    <div className='xl:hidden'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-2xl'>Developers</h1>
            <div id='developers' className='flex flex-col gap-4 px-6'>
                <div id='developer' className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div id='img' className='w-14 h-14 bg-indigo-700 rounded-full'></div>
                        <div>
                            <h3>Soukaina Akaroum</h3>
                            <p className='text-sm'>soukainaakaroum05@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <MessageIcon />
                    </div>
                </div>
                <div id='developer' className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row gap-3 items-center'>
                        <div id='img' className='w-14 h-14 bg-indigo-700 rounded-full'></div>
                        <div>
                            <h3>Abdelali AitAddi</h3>
                            <p className='text-sm'>abdelali.aitaddi@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <MessageIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developers


