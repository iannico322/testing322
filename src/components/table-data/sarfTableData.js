import ImageSample from './../../images/img-sample.jpg'

const SarfTableData = (props) => {
    return (
      <>
      <tr className="text-xs h-[50px] bg-gray rounded-3xl  hover:bg-[#e6e6e673] transition-colors">
        <td className="pl-3 py-2 center rounded-l-md w-[20%]">
          <div className="flex items-center w-full gap-3">
            <img
              src={ImageSample}
              className="h-[30px] w-[30px] rounded-full"
              alt=""
            />
            <div className="w-full leading-3 ">
              <h1 className="text-xs font-semibold ">{props.organization}</h1>
              <div className="text-[10px] font-normal">
                {"Mother Organization"}
              </div>
            </div>
          </div>
        </td>
        <td className="pl-3 ">
          <div className="flex flex-col justify-center gap-0 leading-3">
            <h1 className="text-xs font-semibold">{props.eventName}</h1>
            <div className="text-[10px] font-normal">
                {props.eventType}
              </div>
          </div>
        </td>
        <td className="pl-3 ">{props.date}</td>
        <td className="w-[30%]  pr-3 rounded-r-md self-end ">
          <div className="flex justify-end gap-5">
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:animate-pulse ">
            {/* <button
                        className="flex bg-[#2af02a] text-center justify-center  items-center w-[100%] h-[30px] gap-1 px-4  text-[10px] border-[1px] border-blue border-opacity-30 border-dashed rounded-sm py-2 active:bg-opacity-80 text-blue"
                       
                      >
                        Approved
                      </button> */}
          
            </div>

            <div className="flex items-center justify-center gap-1 cursor-pointer hover:animate-pulse ">
            <button
                        className="flex bg-white text-center justify-center  items-center w-[100%] h-[30px] gap-1 px-4  text-[10px] border-[1px] border-blue border-opacity-30 border-dashed rounded-sm py-2 active:bg-opacity-80 text-blue"
                       onClick={props.setviewing}
                      >
                        View Requirements
                      </button>
          
            </div>
            
          </div>
        </td>
      </tr>
      <hr className="mb-3 border-none " />
    </>
    );
  };
  
  export default SarfTableData;
  