import ImageSample from './../../images/img-sample.jpg'

const OrganizationTableData = (props) => {
    return (
      <>
        <tr className="text-xs h-[50px] bg-gray rounded-3xl hover:bg-[#e6e6e673] transition-colors">
          <td className="pl-3 center rounded-l-md">
            <div className="flex items-center gap-3">
              <img
                src={ImageSample}
                className="h-[35px] w-[35px] rounded-full"
                alt=""
              />
              <div className="leading-3">
                <h1 className="text-xs font-semibold">{props.name}</h1>
                <div className="text-[10px] font-normal">
                  {props.description}
                </div>
              </div>
            </div>
          </td>
          <td className="pl-3 ">
            <div className="flex flex-col justify-center gap-0">
              <h1 className="text-xs font-semibold">{props.type}</h1>
            </div>
          </td>
          <td className="pl-3 ">{props.category}</td>
          <td className="w-[250px] pl-3 rounded-r-md ">
            <div className="flex justify-start w-[100px] gap-5">
              <div className="flex items-center justify-center h-full gap-1 cursor-pointer hover:animate-pulse text-blue ">
                <span className="material-symbols-outlined">visibility</span>
                <p>View</p>
              </div>
  
              <div className="flex items-center justify-center gap-1 cursor-pointer hover:animate-pulse text-yellow ">
                <span className="material-symbols-outlined">edit</span>
                <p>Edit</p>
              </div>
  
              <div className="flex items-center justify-center gap-1 text-[red] hover:animate-pulse cursor-pointer ">
                <span className="material-symbols-outlined ">delete</span>
                <p>Delete</p>
              </div>
            </div>
          </td>
        </tr>
        <hr className="mb-3 border-none " />
      </>
    );
  };
  
  export default OrganizationTableData;
  