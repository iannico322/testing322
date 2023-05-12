import React from "react";
import MagkahiosaLogo from "./../../images/MagkahiOSA-logo.jpg";
// import { navShower } from "../../cache/showNav";
// import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  // const navState = useSelector(navShower)
  // const dispatch = useDispatch()
  return (
    <>
      <div className=" relative flex items-center justify-between h-[100px] w-full bg-white shadow-lg ">
        <span
          onClick={() => {
            let nav = document.querySelector(".nav");
            nav.classList.remove("slg:translate-x-[-100%]")
          }}
          className="ml-10 opacity-0 cursor-pointer pointer-events-none slg:opacity-100 slg:pointer-events-auto material-symbols-outlined"
        >
          menu
        </span>
        <img className="h-12" src={MagkahiosaLogo} alt="" />

        <div className="flex gap-5 mr-20 lg:mr-10">
          <div className="flex gap-1 cursor-pointer hover:bg-[#a4a4a46a] hover:text-blue px-2 py-3 rounded-md items-center  text-xs">
            <span className="material-symbols-outlined ">person</span>
            Profile
          </div>
          <div className="flex gap-1 cursor-pointer hover:bg-[#a4a4a46a] px-2 py-3 rounded-md text-xs items-center">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
