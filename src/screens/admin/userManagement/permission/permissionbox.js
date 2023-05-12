
import React, { useEffect, useState } from "react";

import useDebounce from "../../../../components/debounce/debounce";

const PermissionBox = (props) => {

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("name");
    const query = useDebounce(search, 1000);
  return (
    <>
         <div className=" border-dashed border-blue border-opacity-40 border-[1px] rounded-md w-full min-h-[60px] px-6 py-4 pt-7  pb-8 flex-col flex justify-start bg-white shadow-md">
            <div className="flex justify-center w-full ">
              <div className="w-full ">
                <div className="flex justify-between ">
                  <div className="flex flex-col leading-4">
                    <h1 className="self-start text-xl font-bold ">
                      Permissions - <span className=" text-yellow">{props.name}</span> 
                    </h1>
                    <p className="text-xs font-medium">User Management</p>
                  </div>

                  <div className="flex items-center gap-6 leading-4 slg:gap-2">
                    <p className="flex text-sm font-medium slg:block">
                      <p>Sort by :</p>
                      <select
                        className="underline border-none outline-none cursor-pointer "
                        required
                        value={sort}
                        onChange={(e) => {
                          setSort(e.target.value);
                        }}
                      >
                        <option value="name" defaultValue="name">
                          Name
                        </option>
                        <option value="email">Email</option>
                        <option value="position">Position</option>
                      </select>
                    </p>

                    <div className="relative flex items-center">
                      <span className="absolute ml-2 material-symbols-outlined">
                        search
                      </span>
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] border-dashed text-sm  py-[10px] rounded-[4px] font-[500] "
                      />
                    </div>
                  </div>
                </div>

                <table className="w-full mt-5 border-separate border-spacing-0">
                  <thead>
                    <tr className="text-xs  h-[40px]  rounded-lg bg-red-100 w-full   text-left bg-gray ">
                      <th className="pl-5 w-[70%] rounded-l-md ">
                        Position Name
                      </th>
                      <th className="w-[7.5%] ">View</th>
                      <th className="w-[7.5%]">Create</th>
                      <th className="w-[7.5%]">Modify</th>
                      <th className="w-[7.5%] rounded-r-md">Delete</th>
                    </tr>
                    <hr className="mb-3 border-none " />
                  </thead>

                  <tbody>
                    {props.accounts.map((e, key) => (
                     <>
                     <tr className=" text-xs h-[40px]  bg-gray rounded-3xl  hover:bg-[#e6e6e673] transition-colors">
                       <td className="pl-5 center rounded-l-md">
                         <h1 className="text-xs font-semibold ">{e.position}</h1>
                       </td>
                       <td className="pl-3 center ">
                         <input
                           
                           type="checkbox"
                           className="flex self-center cursor-pointer "
                           name=""
                           id=""
                           checked={e.permission[0] == 1? true: false}
                         />
                       </td>
                       <td className="pl-3 center ">
                         <input
                           type="checkbox"
                           className="flex self-center cursor-pointer "
                           name=""
                           id=""
                           checked={e.permission[1] == 1? true: false}
                         />
                       </td>
                       <td className="pl-3 center ">
                         <input
                           
                           
                           type="checkbox"
                           className="flex self-center cursor-pointer "
                           name=""
                           id=""
                           checked={e.permission[2] == 1? true: false}
                         />
                       </td>
                       <td className="pl-3 center ">
                         <input
                           type="checkbox"
                           className="flex self-center cursor-pointer "
                           name=""
                           id=""
                           checked={e.permission[3] == 1? true: false}
                         />
                       </td>
                     </tr>
                     <hr className="mb-3 border-none " />
                   </>
                  ))}
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    
    
    </>
  )
}

export default PermissionBox