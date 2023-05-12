import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navCache, changeNav } from "../../cache/navCache";
import { useDispatch, useSelector } from "react-redux";

import './dropdown.css'
const Dropdown = (props) => {

  const dispatch = useDispatch();
  const navbarCache = useSelector(navCache);
  
  const navigate = useNavigate()
  
  const [list, setList] = useState(props.lists);

  const [expand, setexpand] = useState(false);
 
  return (
    <li 
    

    onClick={props.onClick}
    >
      <div
        onClick={
          ()=>{
            setexpand(!expand)
          }
          
         }
        className={ expand?" hover:bg-opacity-90 font-bold transition-colors  w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between  ": "hover:bg-[#6d6d6d] hover:font-normal transition-colors  w-full flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between "}  
      >
        <span className="">{props.head}</span>
        <span className="material-symbols-outlined drop-down ">{expand? "expand_more":"chevron_left"}</span>
      </div>
      <ul className={    expand? " relative  translate-x-[0%] py-2 pl-6 space-y-2 opacity-100 drop-down ":" translate-x-[-10%] translate-y-[-0%] absolute opacity-0 pointer-events-none  " }>

        {list.map((e,key)=>(
          <button
          onClick={
            ()=>{
              
              dispatch(changeNav(e.li))
              navigate(e.link)
            }
          }
          key={key}
          className={ navbarCache === e.li ? 
          " flex w-full px-5 py-2 font-normal transition-colors  rounded-sm cursor-pointer bg-yellow hover:bg-opacity-90 active:bg-[#343434]":
          " flex w-full px-5 py-2 hover:font-normal transition-colors  rounded-sm cursor-pointer hover:bg-yellow  active:bg-[#343434]"}
        >
          {e.li}
        </button>

        ))}
       
      </ul>
    </li>
  );
};

export default Dropdown;
