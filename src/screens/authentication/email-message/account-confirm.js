import React from 'react'
import Logo from './../../../images/MagkahiOSA-logo.jpg'
const AccountConfirm = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>


        <div className='flex flex-col min-h-[400px] w-[500px] bg-white '>

        <img className=' w-[50%] my-3 object-contain self-center ' src={Logo} alt="" />
            <div className=' shadow-md h-[90px] w-full bg-[#2e13fc] flex items-end text-white'>
                 <h1 className='mb-4 ml-5 text-2xl '>
                    MagkahiOSA Verification Code
                </h1> 
                
            </div>
            

            <div className='pb-2 my-10 mx-7'>
                
                <p className='text-xs ' >Google received a request to use this email address to help recover Google Account <span className="text-blue-500 underline cursor-pointer">choypunks@gmail.com</span>. </p>

                <h1 className='self-center my-10 text-2xl font-bold text-center hover:text-blue-700 ' >6969</h1>
                <div className='flex flex-col gap-4 text-xs '>
                    <p>Enter the code when asked for it to show that Google can reach you at this email address.</p>

                <p>If you don’t recognize <span className="text-blue-500 underline cursor-pointer">choypunks@gmail.com</span>, someone probably gave your email address by mistake. You can safely ignore this email.</p>

                <p>Sincerely, <br />
The MagkahiOSA Team</p>
                </div>

                
                
            </div>
        </div>
    </div>
  )
}

export default AccountConfirm