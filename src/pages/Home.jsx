import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Notifications from '../components/Notifications.jsx';
import Developers from '../components/Developers.jsx';
import Profile from '../components/Profile.jsx';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CodeIcon from '@mui/icons-material/Code';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <Router>
        <div className='h-screen flex flex-col md:gap-4 md:flex-row md:px-1 xl:px-3 xl:gap-5 overflow-hidden'>

            <Header/>

            <ProfileBar/>

            <div className='xl:flex xl:flex-row h-full py-5 md:py-9'>
                <div id='content' className='bg-myGray overflow-y-scroll p-6 2xl:px-14 h-[89vh] xl:h-full rounded-xl border border-lineColor md:w-[60vw] xl:rounded-none xl:rounded-s-3xl xl:w-[48vw] 2xl:w-[50vw]'>
                    <Routes>
                        <Route path='/main' element={<Main/>} />
                        <Route path='/notifications' element={<Notifications/>} />
                        <Route path='/developers' element={<Developers/>} />
                        <Route path='/profile' element={<Profile/>} />
                    </Routes>
                </div>

            <DevelopersBar/>
                
            </div>
        </div>
    </Router>
  )
}

export default Home


//extra components

//DevelopersBar
const DevelopersBar = () =>{
    return (
        <div className='hidden xl:block bg-myGray border-y border-r border-lineColor xl:rounded-e-3xl xl:w-[28vw] xl:flex xl:flex-col justify-between'>
            <div className='p-6 flex flex-col gap-6'>
                <h1 className='text-2xl'>Developers</h1>
                <div id='developers' className='flex flex-col gap-4 2xl:px-6'>
                    <div id='developer' className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row gap-3 items-center'>
                            <div id='img' className='w-14 h-14 bg-indigo-700 rounded-full'></div>
                            <div>
                                <h3 className='text-lg'>Soukaina Akaroum</h3>
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
                                <h3 className='text-lg'>Abdelali AitAddi</h3>
                                <p className='text-sm'>abdelali.aitaddi@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <MessageIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div id='social media' className='border-t border-lineColor px-6 py-10 flex flex-col items-center justify-center gap-2 text-gray-400'>
                <div className='flex flex-row items-center gap-4'>
                    <p className='hover:text-white'>About</p>
                    <p className='hover:text-white'>Privacy & Terms</p>
                    <p className='hover:text-white'>Help Center</p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <p className='hover:text-white'>Facebook</p>
                    <p className='hover:text-white'>Instagram</p>
                    <p className='hover:text-white'>Github</p>
                </div>
                <small>&copy; Copyright 2024</small>
            </div>
        </div>
    )
}


//ProfileBar
const ProfileBar = () =>{
    return (
        <div id='profile' className='hidden md:block md:w-[40vw] md:flex md:flex-col md:items-center md:gap-12 md:py-3 xl:w-[35vw] 2xl:w-[25vw]'>
            <Link to='/main' className='text-3xl font-bold mt-3'>Twitter</Link>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col items-center gap-3'>
                    <div id='imgProfile' className='w-24 h-24 rounded-full bg-indigo-500'></div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-xl'>Soukaina akaroum</h2>
                        <h4 className='text-sm text-gray-300'>Soukyy-123</h4>
                    </div>
                    <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur hgjhgjhghhjg ajgggbdipisicing elit.</p>
                </div>
                <hr className='border border-hr1' />
                <div className=' flex flex-col gap-2'>
    
                    <div className='flex flex-row items-center px-3 bg-btnColor rounded-md w-full '>
                        <EditIcon />
                        <p className='p-2'>Change Profile</p>
                    </div>
    
                    <Link to='/notifications' className='flex flex-row items-center px-3 rounded-md w-full'>
                        <NotificationsIcon />
                        <p className='p-2'>Notifications</p>
                    </Link>
    
                    <Link to='/developers' className='flex flex-row items-center px-3 rounded-md w-full xl:hidden'>
                        <CodeIcon />
                        <p className='p-2'>Developers</p>
                    </Link>
                    
                    <div className='flex flex-row items-center px-3 rounded-md w-full'>
                        <LogoutIcon />
                        <p className='p-2'>Logout</p>
                    </div>
                </div>
            </div>
        </div>
      )
}

