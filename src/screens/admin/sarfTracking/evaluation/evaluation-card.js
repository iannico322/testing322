import React from "react";

const EvaluationCard = (props) => {
  return (
    <>
      <div className=" flex justify-between bg-[#F6F6F6] h-[100px] rounded-md  border-dashed border-[1px] border-[#00000054]  ">
        <div className=" flex flex-col min-w-[30%] h-full px-4 py-2 gap-3 ">
          <div className="flex h-full gap-4 px-3 py-2 ">
            <div className=" flex items-center self-start justify-center h-[30px] mt-1 w-[30px] object-contain bg-[#DBEAFE] rounded-md border-dashed border-[1px] border-[#00000054]">
              <p className=" text-[10px]">Icon</p>
            </div>
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h1 className="font-semibold text-md ">{props.name}</h1>
                <p className="text-[10px] ">{props.org}</p>
              </div>

              <div>
                <h1 className="text-xs ">
                  SARF Documents:{" "}
                  <span className="ml-2 font-medium underline cursor-pointer text-yellow">
                    Here
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end px-5  w-[30%] h-full ">
          <a
            href="https://www.bing.com/images/search?view=detailV2&ccid=igk94VoJ&id=0C52E416FDBE439614C1F644E69FC9DE9D4EF382&thid=OIP.igk94VoJBlDOZzPgAPiwzwHaF7&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fineQ8iP.jpg&exph=1024&expw=1280&q=monkey&simid=608042708167766023&FORM=IRPRST&ck=F539CF9CDF9E5C140FD9A73D33D56EFD&selectedIndex=0&ajaxhist=0&ajaxserp=0"
            target="_blank"
            className=" flex items-center justify-center rounded-md border-dashed border-[1px] border-[#00000054] cursor-pointer hover:bg-yellow hover:text-white transition-colors  w-[230px] h-[70%]  bg-[#FFFFFF] "
          >
            <p className="text-xs text-center ">View Evaluation</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default EvaluationCard;
