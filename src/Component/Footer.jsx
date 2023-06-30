import {useState} from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {FaTwitter, FaFacebookSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {

  const year = new Date().getFullYear();

  const[Subscribe, setSubcribe] = useState("");

  const submit = (e) =>{
    e.preventDefault
  };

  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2 '>
      <div className='max-w-[1240] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8 pl-14'>
        
            <div>
            <Link to='*'><h6 className='font-bold uppercase pt-2'>solutions</h6></Link>
            <ul>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Marketing</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Analytics</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Commerce</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Data</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Cloud</li></Link>
            </ul>
            </div>
            <div>
            <Link to='*'><h6 className='font-bold uppercase pt-2'>community</h6></Link>
            <ul>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Marketing</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Analytics</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Commerce</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Data</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Cloud</li></Link>
            </ul>
            </div>
            <div>
            <Link to='*'><h6 className='font-bold uppercase pt-2'>support</h6></Link>
            <ul>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Marketing</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Analytics</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Commerce</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Data</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Cloud</li></Link>
            </ul>
            </div>
            <div>
            <Link to='*'><h6 className='font-bold uppercase pt-2'>company</h6></Link>
            <ul>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Marketing</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Analytics</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Commerce</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Data</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Cloud</li></Link>
            </ul>
            </div>
            <div>
            <Link to='*'><h6 className='font-bold uppercase pt-2'>legal</h6></Link>
            <ul>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Marketing</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Analytics</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Commerce</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Data</li></Link>
            <Link to='*'><li className='pl-5 leading-10 py-1'>Cloud</li></Link>
            </ul>
            </div>

            
            

        <div className='col-span-2 pt-8 mt-8 md:pt-2'>
        <p className='uppercase font-bold'>subscribe to our newsletter</p>
        <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
        <form className='flex flex-col sm:flex-row ' onSubmit={submit}>
        <input type="email" placeholder='Enter email..' className='w-full p-2 mr-4 rounded-md mb-4 text-black font-bold h-[50px]'value={Subscribe} onChange={(e) => setSubcribe(e.target.value)} />
        <button className='bg-blue-900 h-[50px] rounded-xl w-[100px]  '>Subscribe</button>
        </form>
        </div>

        
        
        
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Workflow, CLL. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <a href=""><AiFillLinkedin/></a>
          <a href=""><FaTwitter/></a>
          <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
