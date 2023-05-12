import React from 'react'

const ButtonFlat = (props) => {
  return (
  
        <button style={{backgroundColor:props.bgColor}} className={'text-white font-normal text-sm text-md w-full h  text-center flex items-center justify-center py-2 rounded-md  hover:animate-pulse active:scale-[1.02] '}>{props.value}</button>

  )
}

export default ButtonFlat