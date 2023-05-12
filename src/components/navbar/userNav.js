import React, { useEffect, useState } from "react";
import Dropdown from "./../dropdown/dropdown";
import OrgImage from "./../../images/org-logo-sample.jpg";
import { useNavigate } from "react-router-dom";
import { navCache, changeNav } from "../../cache/navCache";
import { useDispatch, useSelector } from "react-redux";
import { useSignOut, useAuthUser } from "react-auth-kit";
import "./adminNav.css";

export const UserNav = () => {
  const dispatch = useDispatch();
  // const signOut = useSignOut();
  // const userState = useAuthUser();
  const navbarCache = useSelector(navCache);

  const [show,setshow] = useState(false)

  // useEffect(() => {
  //   if (!userState()) {
  //     navigate("/login");
  //   }
  // });
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" 
        nav border-r-[2px] 
                left-0 z-10
                flex flex-col items-center justify-start 
                h-[100%] max-w-[400px] min-w-[350px]
                bg-blue border-yellow-600 
                 relative translate-x-[0%]
              
                slg:fixed slg:translate-x-[-100%]
        "
      >
        <div className=" w-[80%] mt-10 flex flex-col items-start gap-10 ">
          <div className="flex items-center w-full gap-3">
            <div className=" flex items-center gap-3   w-[90%] slg:w-[80%] overflow-ellipsis  ">
              <div className=" h-[50px] w-[50px]  ">
                <div className="flex items-center w-full h-full cursor-pointer "
                 onClick={()=>{
                  setshow(!show)
                 }}
                >
                  <img
                    className={show?"object-contain rounded-full border-2 border-yellow ": "object-contain rounded-full "}
                    src={OrgImage}
                    alt="Org Image"
                  />
                </div>

                <div className={show?"  mt-4 ml-3 rounded-xl absolute flex w-[380px] min-h-[10px] backdrop-blur-md bg-[#eff1fceb] shadow-lg  self-end items-center py-6  justify-start flex-col ": "hidden"}>
             
              
                  <p className="w-full py-3 mb-3 text-sm text-center bg-white ">Select Organization</p>
                    <div
                      className=" flex items-center gap-3 cursor-pointer w-[90%] overflow-ellipsis  hover:bg-[#c1d4fa] rounded-md  p-2 py-4  "
                      onClick={() => {
                        navigate("/user/profile");
                      }}
                    >
                      <img
                        className=" h-[50px] w-[50px] object-contain rounded-full border-[#c7c7c7] border-4 "
                        src={OrgImage}
                        alt="Org Image"
                      />

                      <div className="flex flex-col items-start justify-start w-[93%] slg:w-[73%]  ">
                        <h2 className="relative w-full text-sm font-semibold truncate">
                          Programmers Varsity {/* {userState().name} */} 
                        </h2>
                        <p className="text-xs truncate text-md ">Prog. Var  </p>
                      </div>
                 
                  </div>



                  <div
                      className=" flex items-center gap-3 cursor-pointer w-[90%] overflow-ellipsis hover:bg-[#c1d4fa] rounded-md  p-2 py-4  "
                      onClick={() => {
                        navigate("/user/profile");
                      }}
                    >
                      <img
                        className=" h-[50px] w-[50px] object-contain rounded-full border-[#c7c7c7] border-4 "
                        src={OrgImage}
                        alt="Org Image"
                      />

                      <div className="flex flex-col items-start justify-start w-[93%] slg:w-[73%]  ">
                        <h2 className="relative w-full text-sm font-semibold truncate">
                          Society of Information Technology Enthusiasts {/* {userState().name} */} 
                        </h2>
                        <p className="text-xs truncate text-md ">SITE  </p>
                      </div>
                 
                  </div>

                  






                </div>
              </div>

              <div
                className="flex flex-col items-start justify-start w-[93%] slg:w-[73%] text-white  "
                onClick={() => {
                  navigate("/user/profile");
                }}
              >
                <h2 className="relative w-full font-semibold truncate text-md">
                  {/* {userState().name} */} Madam Ferson
                </h2>

                <p className="text-xs text-yellow">
                  {/* {userState().email}     */}
                  test@gmail.com
                </p>
                {/* {console.table(userState())} */}
              </div>
            </div>

            <div
              onClick={() => {
                setshow(false)
                let nav = document.querySelector(".nav");
                nav.classList.add("slg:translate-x-[-100%]");
              }}
              className="items-center self-center hidden p-1 rounded-lg cursor-pointer hover:animate-pulse slg:flex bg-none bg-yellow"
            >
              <span className="material-symbols-outlined ">
                keyboard_backspace
              </span>
            </div>
          </div>

          <ul className=" flex flex-col gap-1 text-white text-md font-[200] text-center w-[90%] self-center">
            <li
              className={
                navbarCache === "Dashboard"
                  ? " flex w-full px-5 py-2 transition-colors rounded-sm cursor-pointer bg-yellow hover:bg-opacity-90 font-normal "
                  : "flex w-full px-5 py-2 transition-colors rounded-sm cursor-pointer hover:bg-yellow hover:font-normal "
              }
              onClick={() => {
                dispatch(changeNav("Dashboard"));
                navigate("/user/dashboard");
              }}
            >
              Dashboard
            </li>

            <Dropdown
              head="SARF Management"
              lists={[
                {
                  li: "Create New",
                  link: "/user/create-sarf",
                },
                {
                  li: "Evaluation Reports",
                  link: "/user/evaluate-sarf",
                },
              ]}
            />

            <Dropdown
              head="Calendar Management"
              lists={[
                {
                  li: "Calendar Schedule",
                  link: "/user/calendar",
                },
              ]}
            />

            <li>
              <div
                className="mt-10 hover:bg-[#be1a1a] active:bg-[#7e0d0d] w-[60%] flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between"
                onClick={() => {
                  // signOut();
                  navigate("/login");
                }}
              >
                <span className="flex gap-2">
                  Log Out
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
