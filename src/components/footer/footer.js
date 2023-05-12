import React, { useEffect } from 'react'

const Footer = () => {
  
  return (
    <>
    
    <div className=" z-20 flex justify-between items-center fixed bottom-0 h-[50px] w-full bg-yellow text-sm">
        <p className="ml-20">2022 © USTP Office of Student Affairs v1.0.0</p>
        <p className="mr-10">{

          getCurrentDateTime() 
        
        }</p>
      </div>
    </>
  )
}
function getCurrentDateTime() {
  const now = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  let hour = now.getHours();
  let minute = now.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // Convert from 24-hour to 12-hour format
  if (hour > 12) {
    hour -= 12;
  }
  if (hour === 0) {
    hour = 12;
  }

  // Add leading zero to minutes if needed
  if (minute < 10) {
    minute = '0' + minute;
  }

  const dateTimeString = `${month} ${day}, ${year} ${hour}:${minute} ${ampm}`;
  return dateTimeString;
}
export default Footer