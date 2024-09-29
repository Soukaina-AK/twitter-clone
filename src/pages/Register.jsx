import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Register() {

  const [isFocusedFN, setIsFocusedFN] = useState(false)
  const [isFocusedLN, setIsFocusedLN] = useState(false)
  const [isFocusedUN, setIsFocusedUN] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPw, setIsFocusedPw] = useState(false)
  const [isFocusedPwC, setIsFocusedPwC] = useState(false)

  const onFocusClass = 'flex flex-row items-center gap-3 rounded-full w-full h-12 px-6 bg-inputBorder border border-l-pBtn shadow-md shadow-gray-700'
  const onBlurClass = 'flex flex-row items-center gap-3 rounded-full w-full h-12 px-6 bg-inputBorder'

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-8 w-full p-3 sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw]'>
        <form className='flex flex-col items-center gap-8 bg-myGray w-full rounded border border-lineColor p-10'>
          <Typography variant='h3'>Register</Typography>

          <div className='flex flex-col items-center w-full gap-5'>
            <div id="inputs" className='flex flex-col items-center gap-4 w-full'>

              <div className='flex flex-row items-center gap-2 w-full'>
                <div onFocus={() => setIsFocusedFN(true)} onBlur={() => setIsFocusedFN(false)} className={isFocusedFN ? onFocusClass : onBlurClass}>
                  <PersonOutlinedIcon className='text-gray-400'/>
                  <input type="text" placeholder='First Name' className='outline-none bg-inputBorder w-full h-10'/>
                </div>

                <div onFocus={() => setIsFocusedLN(true)} onBlur={() => setIsFocusedLN(false)} className={isFocusedLN ? onFocusClass : onBlurClass}>
                  <PersonOutlinedIcon className='text-gray-400'/>
                  <input type="text" placeholder='Last Name' className='outline-none bg-inputBorder w-full h-10'/>
                </div>
              </div>

              <div onFocus={() => setIsFocusedUN(true)} onBlur={() => setIsFocusedUN(false)} className={isFocusedUN ? onFocusClass : onBlurClass}>
                <AccountCircleOutlinedIcon className='text-gray-400'/>
                <input type="text" placeholder='User Name' className='outline-none bg-inputBorder w-full h-10'/>
              </div>
              
              <div onFocus={() => setIsFocusedEmail(true)} onBlur={() => setIsFocusedEmail(false)} className={isFocusedEmail ? onFocusClass : onBlurClass}>
                <MailOutlineIcon className='text-gray-400'/>
                <input type="email" placeholder='Email' className='outline-none bg-inputBorder w-full h-10'/>
              </div>

              <div className='flex flex-row items-center gap-2 w-full'>
                <div onFocus={() => setIsFocusedPw(true)} onBlur={() => setIsFocusedPw(false)} className={isFocusedPw ? onFocusClass : onBlurClass}>
                  <LockOutlinedIcon className='text-gray-400'/>
                  <input type="password" placeholder='Password' className='outline-none bg-inputBorder w-full h-10'/>
                </div>

                <div onFocus={() => setIsFocusedPwC(true)} onBlur={() => setIsFocusedPwC(false)} className={isFocusedPwC ? onFocusClass : onBlurClass}>
                  <LockOutlinedIcon className='text-gray-400'/>
                  <input type="password" placeholder='Password Confirm' className='outline-none bg-inputBorder w-full h-10'/>
                </div>
              </div>

            </div>
            <input type="submit" className='w-full bg-pBtn h-12 rounded-full' />
          </div>

          <div id="or" className='flex flex-row items-center gap-2 w-full'>
            <hr className='w-full border-gray-500' />
            <p className='text-gray-500'>OR</p>
            <hr className='w-full border-gray-500' />
          </div>

          <div id="sign up with google" className='flex flex-row items-center justify-center gap-3 w-full h-12 border border-pBtn rounded-full'>
            <GoogleIcon />
            <p>Sign up with Google</p>
          </div>
        </form>

        <div className='bg-myGray flex flex-row gap-2 items-center justify-center w-full h-16 rounded text-sm border border-lineColor'>
          <p className='text-gray-500'>Already have an account?</p>
          <Link to='/login'>Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default Register