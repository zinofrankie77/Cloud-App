import React from 'react'

const About_innerpage = () => {
  return (
    <div className='w-full my-8'>
        <div className='max-w-[1240px] mx-auto'>


            <div className='text-center py-8'>
                <h1 className='text-5xl font-bold py-4'>Trusted by all developers across the world</h1>
                <p className='text-3xl py-6 text-gray-600'>Transform images and videos to load faster with no visual degradation, automatically generate image and video variants, and deliver high quality responsive experiances to increase conversions.</p>

            </div>

            <div className='grid md:grid-cols-3 px-2 pt-4 text-center gap-1'>

                <div className='border py-8 rounded-xl shadow-xl'>
                    <h1 className='text-6xl font-bold text-blue-700'>100%</h1>
                    <p className='text-gray-400 mt-2 font-bold'>Completion</p>

                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <h1 className='text-6xl font-bold text-blue-700'>24/7</h1>
                    <p className='text-gray-400 mt-2 font-bold'>Delivery</p>

                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <h1 className='text-6xl font-bold text-blue-700'>100k</h1>
                    <p className='text-gray-400 mt-2 font-bold'>Transaction</p>

                </div>
            </div>
        </div>
    </div>
    // 
  )
}

export default About_innerpage
