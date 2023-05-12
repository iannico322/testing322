import React from 'react'
import { useNavigate } from 'react-router'
import OrgImage from './../../../images/org-logo-sample.jpg'
import { useAuthUser } from 'react-auth-kit'

const UserProfilePage = () => {
  const navigate = useNavigate()
  // const userCredentials = useAuthUser();
  return (
    
    <div className=" h-[100%] w-[100%] bg-gray">{/* {screen} */}
            <div className='flex-wrap '> {/*first div*/}
              <div className="ml-10 h-[100%] w-[100%] ">
              <button 
              
              onClick={()=>{
                navigate('/user/dashboard')
              }}
              className='flex items-center gap-1 px-10 py-3 hover:bg-slate-500 hover:text-white'>
                              <span className="material-symbols-outlined">
                keyboard_backspace
                </span>
                Back
              </button>
              </div>
            </div>
            <div className='flex '> {/*sec div*/}
              <div className="h-[100%] w-[50%] mt-20"> {/*sec div, first div*/}
                <div className='flex flex-col items-center mb-24'> {/*sec div, first div,first div*/}
                  <label className='text-[#2F80ED] text-xl font-normal mt-2 mb-7 -ml-10'>Personal Details</label>
                  <img src= {OrgImage} className='w-[35%] shadow-md boarder-solid border-2 border-[#7a7d84] border-opacity-40' alt='Logo'/>
                  <button 
                  type="submit" 
                  className='flex-shrink  -mt-3 rounded-full px-10 py-2
                   bg-[#fdfdf8] shadow-xl hover:bg-[#FCB316]
                    hover:text-white '>Upload New</button>
                </div>
                <div className='flex-col m-10 ml-40'> {/*sec div, first div,sec div*/}
                  <label className='text-[#2F80ED] text-xl font-normal'>Login Activity</label>
                  <p className='mt-4 text-sm font-light'>First acces to site</p>
                  <p className=''>Friday, December 25, 2023, 7:00PM</p>
                </div>
              </div>
              <div className='flex-wrap h-[100%] w-[100%]'> {/*sec div, sec div*/}
                <div className='flex'>  {/*sec div, sec div , first div*/}
                  
                    <div className="flex flex-col items-start h-[100%] w-[100%] mt-28">
                      <div className='m-2'>
                        <h1 className='text-sm font-light'>Name</h1>
                        <p className=''>
                          {/* {userCredentials().name} */}
                          Madam Ferson
                          </p>
                      </div>
                      <div className='m-2'>
                        <h1 className='text-sm font-light'>Email</h1>
                        <p className=''>
                          {/* {userCredentials().email} */}
                          test@gmail.com
                        </p>
                      </div>
                      <div className='m-2'>
                        <h1 className='text-sm font-light'>Organization</h1>
                        <p className=''>Society of Information Technology Enthusiasts</p>
                      </div>
                      <div className='m-2'>
                        <h1 className='text-sm font-light'>Role</h1>
                        <p className=''>Academic Unit Organization Officer</p>
                      </div>
                    </div>

                    <div className="items-start h-[100%] w-[100%] mt-28">
                        <div className='m-2'>
                          <h1 className='text-sm font-light'>Gender</h1>
                          <p className=''>Female</p>
                        </div>
                        <div className='m-2'>
                          <h1 className='text-sm font-light'>Birthdate</h1>
                          <p className=''>03/02/2023</p>
                        </div>
                        <div className='m-2'>
                          <h1 className='text-sm font-light'>Password</h1>
                          <p className=''>***********</p>
                        </div>  
                    </div>
                    
                    
                  
                </div>
                <div className='flex'>  {/*sec div, sec div , sec div*/}
                  <div className=" items-start h-[100%] w-[100%] mt-28">
                    <div className='ml-44'>
                      <h1 className='text-sm font-light'>Last access</h1>
                      <p className=''>Monday, December 4, 2022, 8:01 AM</p>
                    </div>
                    <div className='mt-24 ml-20'>
                      <button type="submit" className='px-10 py-2 rounded-xl text-sm font-semibold text-white bg-yellow hover:bg-[#f7ad0c] '>Edit Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
                
    
   
  )
}

export default UserProfilePage