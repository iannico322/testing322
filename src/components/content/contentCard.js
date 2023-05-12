import React from 'react'

const ContentCard = () => {
  return (
    <div className="flex items-center justify-end gap-5  w-full hover:animate-pulse hover:bg-[#93939325] rounded-md px-5 md:px-0 cursor-pointer">
      <h1 className="text-[80px] font-bold text-yellow mb-6 md:text-[40px]">09</h1>
      <div className="flex flex-col flex-wrap gap-2">
        <h1 className="text-[20px] leading-5 font-bold w-[20%] md:text-[17px]">Accredited Organizations</h1>
        <p className="text-xs underline ">University Student Government</p>
      </div>
    </div>
  );
}

export default ContentCard