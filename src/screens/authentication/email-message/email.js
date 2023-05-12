import React from 'react'
import Logo from './../../../images/MagkahiOSA-logo.jpg'
const Email = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>


        <div className='flex flex-col min-h-[400px] w-[500px] bg-white border-[1px] border-[#38383862] '>

        <img className=' w-[50%] my-3 object-contain self-center ' src={Logo} alt="" />
            <div className=' shadow-md h-[90px] w-full bg-[#2e13fc] flex items-center justify-center text-white '>
                 <h1 className='text-2xl '>
                    MagkahiOSA password reset
                </h1> 
                
            </div>
            

            <div className='flex flex-col pb-2 my-10 mx-7'>
                
                <p className='text-xs ' >We heard that you lost your MagkahiOSA password. Sorry about that!
                <br />

                But don’t worry! You can use the following button to reset your password: </p>

                <a href='#' className='self-center px-2 py-2 my-5 font-bold text-center  w-[200px] text-white active:bg-green-700 bg-green-500 rounded-lg cursor-pointer text-md' >Password Reset</a>
                <div className='flex flex-col gap-4 text-xs '>
            

                <p>If you don’t recognize If you don’t use this link within 3 hours, it will expire. To get a new password reset link, visit :<a href='#' lassName="text-blue-500 underline cursor-pointer"> localhost:300</a>  </p>

                <p>Thanks,, <br />
The MagkahiOSA Team</p>
                </div>

                
                
            </div>
        </div>
    </div>
  )
}

export default Email