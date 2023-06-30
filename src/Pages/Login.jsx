import React from 'react'
import { Link } from 'react-router-dom';
import { Email } from '../Component/Icons';

const Login = () => {
  return (
    <div className='flex justify-center'>
    <form className='pt-[8rem]'>
      <h1 className='font-bold text-black text-[2rem]'>LOGIN:</h1>
      <p className='font-bold text-gray-400'>Please fill in this form.</p>
      <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Username:</label>
            <input className='w-[30vw] p-[7px] rounded-xl border-solid border border-[gray] bg-slate-300'
             type="text"
             name='username'
             />
        </div>

        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Password:</label>
            <input className='w-[30vw] p-[7px] rounded-xl border-solid border border-[gray] bg-slate-300'
             type="password"
             name='password'
             />
        </div>

        <button className='bg-black text-white font-bold text-[1.2rem] rounded-[4px] border-solid border-gray-300 box-border h-10 w-[30vw] mt-5 hover:bg-blue-700'>Login</button>
        <p>Don't have an account? <Link to='/register'><span className='text-blue-700'>Register.</span></Link> </p>
        
    </form>
    </div>
  )
}

export default Login;
