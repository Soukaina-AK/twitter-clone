import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='min-h-screen flex flex-col gap-6 items-center justify-center'>
      <p className='text-8xl'>this is the Register page</p>
      <Link to='/login' className='text-3xl'>go to login page</Link>
    </div>
  )
}

export default Register