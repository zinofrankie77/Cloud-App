import {useState} from 'react'
import { Link } from 'react-router-dom';
import cloudLogo from '../assets/cloud-icon-8.png';
import {menu, Xicon} from'../Component/Icons';




const NavBar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () =>{
    setNav(!nav)
  }

  const handleClose = () =>{
    setNav(!nav)
  }
  return (
    <div className='w-screen h-[80px] z-10 bg-[#f9f9fc] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link to='/'><h1 className='text-4xl font-bold mr-4 sm:text-3xl flex'><img src={cloudLogo} className='w-8 mr-1' alt="" /> Cloud. </h1></Link>
          <ul className='hidden md:flex gap-7 text-[black] cursor-pointer font-bold pl-20 '>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/support'><li>Support</li></Link>
            <Link to='/platforms'><li>Platforms</li></Link>
            <Link to='/pricing'><li>Pricing</li></Link>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <Link to='/login'><button className='px-5 py-3 bg-[black] font-bold rounded-2xl text-white mr-4 hover:bg-blue-700'>login</button></Link>
          <Link to='/register'><button className='px-6 py-3 bg-[black] font-bold rounded-2xl text-white hover:bg-blue-700'>Register</button></Link>
        </div>
        
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ?  <h2>{menu}</h2> : <h2>{Xicon}</h2>}
        </div>
      </div> 

      <ul className={!nav ? 'hidden' : 'absolute bg-[#c4c4bc] text-[blue] w-[50%] px-8 cursor-pointer '} onClick={handleClose}>
         <Link to='/'><li className='border-b-2 py-3 border-black-300 w-full'>Home</li></Link>
         <Link to='/about'><li className='border-b-2 py-3 border-black-300 w-full'>About</li></Link>
         <Link to='/support'><li className='border-b-2 py-3 border-black-300 w-full'>Support</li></Link>
         <Link to='/platforms'><li className='border-b-2 py-3 border-black-300 w-full'>Platforms</li></Link>
         <Link to='/pricing'><li className='border-b-2 py-3 border-black-300 w-full'>Pricing</li></Link>


         <div className='flex flex-col my-4'>
          <Link to='/login'><button className='bg-transparent bg-blue-300 text-black px-8 py-3 mb-4 rounded-2xl'>login</button></Link>
          <Link to='/register'><button className='bg-transparent bg-blue-300 text-black px-8 py-3 mb-4 rounded-2xl'>Register</button></Link>
         </div>
        
      </ul>


    </div>
  )
}

export default NavBar;
