import React from 'react'
import Home_innerpage from '../InnerPages/Home_innerpage';
import About_innerpage from '../InnerPages/About_innerpage';
import Support_innerpage from '../InnerPages/Support_innerpage';
import Platform_innerpage from '../InnerPages/platform_innerpage';
import Pricing_innerpage from '../InnerPages/Pricing_innerpage';


const Home = () => {
  return (
    <div>
      <Home_innerpage/>
      <About_innerpage/>
      <Support_innerpage/>
      <Platform_innerpage/>
      <Pricing_innerpage/>
    

    </div>
  )
}

export default Home;
