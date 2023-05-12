import Dropdown from "./../dropdown/dropdown";
import OrgImage from "./../../images/org-logo-sample.jpg";
import { useNavigate } from "react-router-dom";
import { navCache, changeNav } from "../../cache/navCache";
import { useDispatch, useSelector } from "react-redux";

import "./adminNav.css";
const AdminNav = () => {
  const dispatch = useDispatch();
  const navbarCache = useSelector(navCache);

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
          <div className="flex items-center w-full gap-3 ">
            <div className="flex items-center gap-3 cursor-pointer  w-[90%] slg:w-[80%] overflow-ellipsis  ">
              <img
                className=" 
                          h-[40px] w-[40px]  
                          object-contain rounded-full "
                src={OrgImage}
                alt="Org Profile"
              />
              <div className="flex flex-col items-start justify-start w-[190px] slg:w-[73%] text-white ">
                <h2 className="relative w-full font-semibold truncate text-md">
                  {localStorage.setItem('name',"Johny Y. Papa")}
                  {localStorage.getItem('name')}
                  
                </h2>

                <p className="text-xs text-yellow">
                {localStorage.setItem('email',"johnnypapa@gmail.com")}
                  {localStorage.getItem('email')}
                </p>
              </div>
            </div>

            <div
              onClick={() => {
                console.log("Asd");
                let nav = document.querySelector(".nav");
                nav.classList.add("slg:translate-x-[-100%]");
              }}
              className="items-center self-center hidden p-1 rounded-lg cursor-pointer hover:animate-pulse slg:flex bg-none bg-yellow"
            >
              <span class="material-symbols-outlined">keyboard_backspace</span>
            </div>
          </div>

          <ul className="  flex flex-col gap-1 text-white text-md font-[200] text-center w-[90%] self-center">
            <li
              className={
                navbarCache === "Dashboard"
                  ? " flex w-full px-5 py-2 transition-colors rounded-sm cursor-pointer bg-yellow hover:bg-opacity-90 font-normal "
                  : "flex w-full px-5 py-2 transition-colors rounded-sm cursor-pointer hover:bg-yellow hover:font-normal "
              }
              onClick={() => {
                dispatch(changeNav("Dashboard"));

                navigate("/admin/dashboard");
              }}
            >
              Dashboard
            </li>

            <Dropdown
              head="SARF Tracking"
              lists={[
                {
                  li: "Status",
                  link: "/admin/sarf-status",
                },
                {
                  li: "Evaluation Reports",
                  link: "/admin/sarf-evaluation",
                },
              ]}
            />

            <Dropdown
              head="User Management"
              lists={[
                {
                  li: "Users",
                  link: "/admin/manage-user",
                },
                {
                  li: "Position",
                  link: "/admin/position",
                },
                {
                  li: "Permissions",
                  link: "/admin/manage-permission",
                },
                {
                  li: "Organization",
                  link: "/admin/manage-organization",
                },
              ]}
            />

            <Dropdown
              head="Calendar Management"
              lists={[
                {
                  li: "Calendar Schedule",
                  link: "/admin/calendar",
                },
              ]}
            />

            <Dropdown
              head="Others"
              lists={[
                {
                  li: "Policy Memos",
                  link: "",
                },
              ]}
            />

            <li>
              <div
                className="mt-10 hover:bg-[#be1a1a] active:bg-[#7e0d0d] w-[60%] flex cursor-pointer pl-5 pr-2 py-2 rounded-sm justify-between"
                onClick={() => {
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

export default AdminNav;
