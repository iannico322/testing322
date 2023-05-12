import React, { useState } from "react";

const Input = (props) => {
  const [show, setshow] = useState(false);

  if (props.type === "password") {
    return (
      <div className="flex flex-col gap-1 mt-3 w-[100%]">
        <p className=" font-medium text-xs text-[#4B5563]">{props.label}</p>
        <div className="relative flex items-center ">
          <span
            class=" absolute material-symbols-outlined right-0 highlight mr-4 text-[#9ca3af97] cursor-pointer"
            onClick={() => {
              setshow(!show);
            }}
          >
            {show ? "visibility" : "visibility_off"}
          </span>

          <input
            className="w-full outline-none focus:border-[#1D4ED8] border-[1px] border-[#9ca3af97] text-xs px-4 py-[10px] rounded-[4px] font-[500] "
            type={show ? "text" : "password"}
            name=""
            onChange={props.onChange}
            placeholder={props.placeholder}
            required
            value={props.value}
          />
        </div>

        <p className=" text-[red] text-xs">{props.warning}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 mt-3 w-[100%]">
      <p className=" font-medium text-xs text-[#4B5563]">{props.label}</p>
      <input
        className="w-full outline-none focus:border-[#1D4ED8] border-[1px] border-[#9ca3af97] text-xs px-4 py-[10px] rounded-[4px] font-[500] "
        type={props.type}
        name=""
        onChange={props.onChange}
        placeholder={props.label}
        required
        value={props.value}
      />
    </div>
  );
};

export default Input;
