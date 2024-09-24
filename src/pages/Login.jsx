import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='min-h-screen flex flex-col gap-6 items-center justify-center'>
      <p className='text-8xl'>this is the Login page</p>
      <Link to='/register' className='text-3xl'>go to register page</Link>
    </div>
    
  )
}

export default Login