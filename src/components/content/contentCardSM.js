import React from 'react'

const ContentCardSM = (props) => {
  return (
    <div className="flex items-center gap-5  w-full hover:animate-pulse hover:bg-[#93939325] rounded-md px-5 cursor-pointer">
      <h1 className="text-[40px]  md:text-[30px] font-bold text-yellow mb-2">{props.number}</h1>
      <div className="flex flex-col flex-wrap gap-1 md:gap-0">
        <h1 className="text-[17px] leading-4 font-bold w-full md:text-[12px]">{props.type}</h1>
        <p className="text-[10px] underline w-full   md:leading-3  slg:text-[8px] md:text-[7px] ">{props.name}</p>
      </div>
    </div>
  )
}

export default ContentCardSM