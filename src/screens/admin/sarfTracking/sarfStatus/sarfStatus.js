import React, { useEffect, useState } from "react";
import ImageSample from './../../../../images/sample-org-image.png'
import useDebounce from "../../../../components/debounce/debounce";
import SarfTableData from "../../../../components/table-data/sarfTableData";
import ViewRequirements from "./viewRequirements";
import { useSelector, useDispatch} from "react-redux";
import { sarfCache,addSarfData, clear } from "../../../../cache/sarfData";
import { usersCache} from "../../../../cache/userCredentials";
import { sarfKeyCache, setSarfKey } from "../../../../cache/sarfDataKey";


const AdminSarfStatus = () => {
  const [viewing, setviewing] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const query = useDebounce(search, 1000);
  const data = useSelector(sarfCache)
 const dispatch = useDispatch()


 const [indexKey,setIndexKey]= useState(0)


  useEffect(()=>{
    localStorage.setItem("key",0)
  },[])

 

  return (
    <>
      <div className={viewing?"flex   min-h-0   justify-center w-full  bg-[#E7E7E7] box-border":"hidden"}>
        <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5 mb-[190px]  ">
              <div className="   rounded-md w-full min-h-[500px] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md">
                <div className="flex justify-center w-full ">
                  <div className="w-full ">
                    <div className="flex justify-between ">
                      <div className="flex flex-col leading-4">
                        <h1 className="self-start text-xl font-bold ">
                          For Approval
                        </h1>
                        <p className="text-xs font-medium">
                          Student Activity Request Form
                        </p>
                      </div>

                      <div className="flex items-center gap-6 leading-4 slg:gap-2">
                        <button
                          className="flex items-center gap-1 px-4  text-xs border-[1px] border-blue border-opacity-30 border-dashed rounded-sm py-2 bg-[#E7E7E7] active:bg-opacity-80 text-blue"
                          onClick={() => {
                              dispatch(clear())
                          }}
                        >
                          Sort by: Status
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
                            className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] border-dashed text-sm  py-[10px] rounded-[4px] font-[500] "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full h-full gap-4 mt-3">
                      <table className="w-full mt-5 border-separate border-spacing-0">
                        <thead>
                          <tr className="text-xs  h-[40px]  rounded-lg bg-red-100 w-full   text-left bg-gray ">
                            <th className="pl-5 w-[40%] rounded-l-md ">
                              Organization
                            </th>
                            <th className="w-[20%] ">Event Name</th>
                            <th className="w-[15%]">Date </th>
                            <th className="pl-5 w-[30%] rounded-r-md"></th>
                          </tr>
                          <hr className="mb-3 border-none " />
                        </thead>

                        <tbody> 
                            

                            {data.map((e,key)=>(
                              <SarfTableData
                              key={key}
                              organization={e.organization}
                              name={e.name}
                              eventName={e.eventName}
                              eventType={e.eventType}
                              date={e.date}
                              setviewing={()=>{
                                
                                      dispatch(setSarfKey(key))
                                    
                                setviewing(!viewing)
                              }}
                              />

                            ))}
                          
                       




                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>




              <div className="   rounded-md w-full min-h-[500px] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md">
                <div className="flex justify-center w-full ">
                  <div className="w-full ">
                    <div className="flex justify-between ">
                      <div className="flex flex-col leading-4">
                        <h1 className="self-start text-xl font-bold ">
                        Conducted/Cleared Activities
                        </h1>
                        <p className="text-xs font-medium">
                        Student Activity Request Form
                        </p>
                      </div>

                      <div className="flex items-center gap-6 leading-4 slg:gap-2">
                        <button
                          className="flex items-center gap-1 px-4  text-xs border-[1px] border-blue border-opacity-30 border-dashed rounded-sm py-2 bg-[#E7E7E7] active:bg-opacity-80 text-blue"
                          onClick={() => {
                            
                          }}
                        >
                          Sort by: Status
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
                            className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] border-dashed text-sm  py-[10px] rounded-[4px] font-[500] "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full h-full gap-4 mt-3">
                      <table className="w-full mt-5 border-separate border-spacing-0">
                        <thead>
                          <tr className="text-xs  h-[40px]  rounded-lg bg-red-100 w-full   text-left bg-gray ">
                            <th className="pl-5 w-[30%] rounded-l-md ">
                              Organization
                            </th>
                            <th className="w-[20%] ">Event Name</th>
                            <th className="w-[20%]">Date of Implementation</th>
                            <th className="pl-5 w-[30%] rounded-r-md"></th>
                          </tr>
                          <hr className="mb-3 border-none " />
                        </thead>

                        <tbody>
{/* 
                          {data.map((e)=>(

                            console.table(e)
                           
                          ))} */}
                              

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>





              <div className="   rounded-md w-full min-h-[500px] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md">
                <div className="flex justify-center w-full ">
                  <div className="w-full ">
                    <div className="flex justify-between ">
                      <div className="flex flex-col leading-4">
                        <h1 className="self-start text-xl font-bold ">
                        Revisions
                        </h1>
                        <p className="text-xs font-medium">
                          Student Activity Request Form
                        </p>
                      </div>

                      <div className="flex items-center gap-6 leading-4 slg:gap-2">
                        <button
                          className="flex items-center gap-1 px-4  text-xs border-[1px] border-blue border-opacity-30 border-dashed rounded-sm py-2 bg-[#E7E7E7] active:bg-opacity-80 text-blue"
                          onClick={() => {
                            
                          }}
                        >
                          Sort by: Status
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
                            className=" pl-8 w-full outline-none focus:border-[#331dd8] border-[1px] bg-gray border-[#00000050] border-dashed text-sm  py-[10px] rounded-[4px] font-[500] "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full h-full gap-4 mt-3">
                      <table className="w-full mt-5 border-separate border-spacing-0">
                        <thead>
                          <tr className="text-xs  h-[40px]  rounded-lg bg-red-100 w-full   text-left bg-gray ">
                            <th className="pl-5 w-[30%] rounded-l-md ">
                              Organization
                            </th>
                            <th className="w-[20%] ">Event Name</th>
                            <th className="w-[20%]">Date of Implementation</th>
                            <th className="pl-5 w-[30%] rounded-r-md"></th>
                          </tr>
                          <hr className="mb-3 border-none " />
                        </thead>

                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>

      <div className={viewing?"hidden":"flex"}>
        <ViewRequirements 
          
          setviewing={()=>{
            setviewing(!viewing)
          }}
          keys={()=>{
            console.log(indexKey)
          }}
        />
      </div>
    </>
  );
};

export default AdminSarfStatus;
