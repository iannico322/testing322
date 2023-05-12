import React from 'react'
import MagkahiosaLogo from "./../../images/MagkahiOSA-logo.jpg";
import './loader.css'
const loader = () => {
  return (
    <div className='flex z-[100] flex-col gap-4 items-center justify-center w-screen h-screen bg-white'>

            
            <img src={MagkahiosaLogo} alt="Logo" className=' h-[52px] ' />
            <div class="progress"></div>
    </div>
  )
}

export default loader



