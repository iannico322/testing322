import React, { useState } from "react";
import { usersData } from "../../../SampleData/sampleData";
import useDebounce from "../../../components/debounce/debounce";
import UserTableData from "../../../components/table-data/userTableData";
const UserDashboardPage = () => {


  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const query = useDebounce(search, 1000);

  // useEffect(() => {
  //   console.log(query);
  //   // setSearch(search);
  // }, [query]);



  return (
    <div className="flex min-h-[400px]    justify-center w-full  bg-[#E7E7E7] box-border">
      <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5 mb-32 ">
        <h1 className="text-xl font-bold">Dashboard</h1>
      
        <div className="w-full min-h-[260px] px-6 py-4 pt-7 pb-10 flex-col flex justify-center bg-white rounded-2xl shadow-md">
        
        <h1 className="self-start mb-20 text-xl font-bold ">Track your SARF Status</h1>
        <div className="flex justify-center w-full " >

          <div className="w-[90%] p-7 border-dashed border-blue border-opacity-40 border-[1px] rounded-md pb-5">

          
        
        
          <div className="flex justify-between ">
            <div className="flex flex-col leading-4">
              <p className="font-semibold text-md">REQUESTS</p>
              <p className="text-xs font-medium">
               
                Student Activity Request Form
              </p>
            </div>

            <div className="flex items-center gap-6 leading-4 slg:gap-2">

              
              <p className="flex text-sm font-medium slg:block">
               <p>Sort by :</p> 
                <select
                  className="underline border-none outline-none "
                  required
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value="name" defaultValue="name">
                    Name
                  </option>
                  <option value="date">Date</option>
                </select>
              </p>

              <button className="flex items-center gap-1 px-2 py-1 text-xs rounded-sm bg-yellow text-blue">
              <span className="material-symbols-outlined">
                add
                </span>
                Create New
              </button>
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
                  className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] text-sm  py-[10px] rounded-[4px] font-[500] "
                />
              </div>
            </div>
          </div>

          <table className="w-full mt-5 border-separate border-spacing-0">
            <thead>
              <tr className="text-xs   h-[40px] rounded-lg bg-red-100 w-full  border-[2px]   text-left bg-gray ">
                <th className="pl-3 rounded-l-md ">Event Name</th>
                <th className="pl-3 ">Proposed Date of Implementation</th>
                <th className="pl-3 ">Status</th>
                <th className="pl-3 rounded-r-md "></th>
              </tr>
              <hr className="mb-3 border-none " />
            </thead>

            <tbody>
              {usersData
                .filter(
                  (e) =>
                    e[sort] === query.toLowerCase().startsWith(query) ||
                    e[sort].toLowerCase().includes(query)
                )
                .map((e, key) => (
                  <UserTableData
                    key={key}
                    name={e.name}
                    position={e.position}
                    date={e.date}
       
                    event={e.event}
                  />
                ))}
            </tbody>
          </table>
        </div>
        </div>
      
        </div>

      </div>
    </div>
  
  )
}

export default UserDashboardPage