import React from "react";
import Input from "../input/input";
const Permission = (props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="text-[10px] ml-4">
        <p className="">{props.title}</p>
        <p className="font-semibold">{props.subTitle}</p>
      </div>
      <div className="flex gap-8 bg-gray justify-around border-blue border-opacity-40 border-[1px] border-dashed rounded-md px-2 py-4 text-[10px] font-semibold ">
        <label>{props.label1}</label>
        <label>{props.label2}</label>
        <label>{props.label3}</label>
        <label>{props.label4}</label>
      </div>
      <div className="flex  bg-gray gap-6 py-2 justify-start rounded-md">
        <Input 
        type = "checkbox"
        />
        <Input 
        type = "checkbox"
        />
        <Input 
        type = "checkbox"
        />
        <Input 
        type = "checkbox"
        />
      </div>

    </div>
  );
};

export default Permission;
