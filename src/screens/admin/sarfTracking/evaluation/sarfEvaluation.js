import React, {  useState } from "react";

import useDebounce from "../../../../components/debounce/debounce";
import EvaluationCard from "./evaluation-card";
const AdminSarfEvaluationPage = () => {
 
    const [creating,setcreating] = useState(false)
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("name");
    const query = useDebounce(search, 1000);

    const data = [{
      name:"Week of Assembly",
      org:"Student Council of Technology"
    },{
      name:" Anniversary  ChoyPunks",
      org:"Prog Var"
    },{
      name:" Mang libre si Mark og Burger",
      org:" CITC Student Gods"
    }
  
  ]
  
  
    return (
      <>
      
      

      <div className= "flex min-h-[400px]  h-full   justify-center w-full  bg-[#E7E7E7] box-border">
        <div className="flex flex-col gap-10 w-[95%] min-h-[100px] py-10 mx-5 h-full ">
         
        
          <div className="   rounded-md w-full min-h-[85%] px-6 py-4 pt-7  flex-col flex justify-start bg-white shadow-md">
    
          
          <div className="flex justify-center w-full " >
  
            <div className="w-full ">
  
            
          
          
            <div className="flex justify-between ">
              <div className="flex flex-col leading-4">
              <h1 className="self-start text-xl font-bold ">Evaluate Reports</h1>
              <p className="text-xs font-medium">Student Activities</p>
              </div>
  
              <div className="flex items-center gap-6 leading-4 slg:gap-2">
  
              
  
                <button className="flex items-center gap-1 px-4  text-xs border-[1px] border-blue border-opacity-30 border-dashed rounded-sm py-2 bg-[#E7E7E7] active:bg-opacity-80 text-blue"
                
                onClick={()=>{
                  setcreating(!creating)
                }}
                >
               
                Sort by: Recently Uploaded
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
  
            <div className="flex flex-col gap-4 mt-10 ">
                    {data.filter(e=>e.name.toLowerCase().includes(query) || e.name.toLowerCase().startsWith(query) ).map(e=>(
                      <EvaluationCard
                      name={e.name}
                      org={e.org}
                      />
                    ))}
              
            </div>
          </div>
          </div>
        
          </div>
  
        </div>
      </div>
</>
    )
    
}

export default AdminSarfEvaluationPage