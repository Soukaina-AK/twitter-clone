import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Typography } from '@mui/material';

function Login() {

  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPw, setIsFocusedPw] = useState(false)

  const onFocusClass = 'flex flex-row items-center gap-3 rounded-full w-full h-12 px-6 bg-inputBorder border border-l-pBtn shadow-md shadow-gray-700'
  const onBlurClass = 'flex flex-row items-center gap-3 rounded-full w-full h-12 px-6 bg-inputBorder'

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-8 w-full p-10 sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]'>
        <form className='flex flex-col items-center gap-8 bg-myGray w-full rounded border border-lineColor p-10'>

          <Typography variant='h3'>Login</Typography>

          <div className='flex flex-col items-center w-full gap-5'>
            <div id="inputs" className='flex flex-col items-center gap-4 w-full'>
              <div onFocus={() => setIsFocusedEmail(true)} onBlur={() => setIsFocusedEmail(false)} className={isFocusedEmail ? onFocusClass : onBlurClass}>
                <MailOutlineIcon className='text-gray-400'/>
                <input type="email" placeholder='Email' className='outline-none bg-inputBorder w-full h-10'/>
              </div>
              <div onFocus={() => setIsFocusedPw(true)} onBlur={() => setIsFocusedPw(false)} className={isFocusedPw ? onFocusClass : onBlurClass}>
                <LockOutlinedIcon className='text-gray-400'/>
                <input type="password" placeholder='Password' className='outline-none bg-inputBorder w-full h-10' />
              </div>
            </div>
            <input type="submit" className='w-full bg-pBtn h-12 rounded-full' />
          </div>

          <div id="or" className='flex flex-row items-center gap-2 w-full'>
            <hr className='w-full border-gray-500' />
            <p className='text-gray-500'>OR</p>
            <hr className='w-full border-gray-500' />
          </div>

          <div id='login with google' className='flex flex-row items-center justify-center gap-3 w-full h-12 border border-pBtn rounded-full'>
            <GoogleIcon/>
            <p>Sign in with Google</p>
          </div>

        </form>
        <div className='bg-myGray flex flex-row gap-2 items-center justify-center w-full h-16 rounded text-sm border border-lineColor'>
          <p className='text-gray-500'>Don't have an account?</p>
          <Link to='/register'>Sign up</Link>
        </div>
      </div>
    </div>
    
  )
}

export default Login