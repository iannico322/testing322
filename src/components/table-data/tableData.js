import React from 'react'
import ImageSample from './../../images/img-sample.jpg'
const TableData = (props) => {
  return (
    <>
                   
                    <tr className=' text-xs h-[50px]  bg-gray rounded-3xl  transition-colors  hover:bg-[#e6e6e673] ' >
                      <td className='pl-3 center rounded-l-md'>
                        <div className='flex items-center gap-3'>
                          <img src={ImageSample} className='h-[35px] w-[35px] rounded-full' alt="" />
                        <div className='leading-3 '>
                          <h1 className='text-xs font-semibold '>{props.name}</h1>
                          <p className='text-[10px] font-normal'>{props.position}</p>
                        </div>
                        </div>
                      </td>
                      <td className='pl-3 '>
                        <div className='flex flex-col justify-center gap-0'>
                          <h1 className='text-xs font-semibold '>{props.date}</h1>
                          <p className='text-[10px] font-normal'>{props.time}</p>
                        </div>
                      </td>
                      <td className='pl-3 '>{props.event}</td>
                      <td className='pl-3 rounded-r-md '></td>
                      
                    </tr>
                    <hr  className='mb-3 border-none '/>
                  </>
  )
}

export default TableData