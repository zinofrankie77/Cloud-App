import React from 'react'
import { Tick } from '../Component/Icons'

const Pricing_innerpage = () => {
  return (
    <div className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
            <h2 className='text-3xl uppercase'>Pricing</h2>
            <h3 className='text-5xl font-bold text-white py-8'>The right price for your research</h3>
            <p className='text-3xl'>Reimagined Digital Asset Management (DAM) to to meet the unique needs of today focusing on flexibility, intelligent authomation, and scale..</p>
        </div>

        <div className='grid md:grid-cols-3'>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                <div>
                    <p className='text-6xl py-4 font-bold flex'> &#x20A6;6000 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <div>
                    <p className='text-xl px-8 text-slate-500 '>Extend your term's digital media capabilities for website apps.</p>
                    <div className='text-xl'>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Upload widget, API, and search</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Optional HTTPS SSL Certificate</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Image and video transformations</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Video transcoding and adaptive</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>High performance delivery through a CDN</p>
                        <button className='w-full py-4 my-4 bg-slate-900 text-white rounded-2xl'>Get Started</button>

                    </div>
                    
                </div>

            </div>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>premium</span>
                <div>
                    <p className='text-6xl py-4 font-bold flex'> &#x20A6;1400 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <div>
                    <p className='text-xl px-8 text-slate-500 '>Deliver engaging visual experiences with advanced features and functionality.</p>
                    <div className='text-xl'>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Custom domain (CNAME) support</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Optional HTTPS SSL Certificate</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Authetication Options</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Remote fetch, auto-backup, and revision tracking</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>High performance delivery through a CDN</p>
                        <button className='w-full py-4 my-4 bg-slate-900 text-white rounded-2xl'>Get Started</button>

                    </div>
                    
                </div>

            </div>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Quality</span>
                <div>
                    <p className='text-6xl py-4 font-bold flex'> &#x20A6;3500 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>

                <div>
                    <p className='text-xl px-8 text-slate-500 '>Extend your term's digital media capabilities for website apps.</p>
                    <div className='text-xl'>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Upload widget, API, and search</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Remote fetch, auto-backup, and revision tracking</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Optional HTTPS SSL Certificate</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>Video transcoding and adaptive</p>
                        <p className='flex py-4'><span className='w-5 mr-5 text-green-600'>{Tick}</span>High performance delivery through a CDN</p>
                        <button className='w-full py-4 my-4 bg-slate-900 text-white rounded-2xl'>Get Started</button>

                    </div>
                    
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Pricing_innerpage
