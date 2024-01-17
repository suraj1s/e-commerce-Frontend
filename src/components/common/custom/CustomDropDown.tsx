import { ArrowDownIcon } from "@/assets/icons";
import React from "react";

type CustomDropDownProp = {
  errors: any;
  register: any;
  inputfield: inputField;
};

const CustomDropDown = ({
  inputfield,
  register,
  errors,
}: CustomDropDownProp) => {
  return (
    <div>
      <div className=" relative rounded-lg w-64 bg-gray-50 overflow-hidden ">
        <ArrowDownIcon  className = "w-6 h-6 absolute right-2 top-2"/>
        <select
          {...register(inputfield.name)}
          className="appearance-none  bg-transparent ring-0 outline-none border border-neutral-500 focus:ring-violet-500 focus:border-violet-500 block text-sm font-bold rounded-lg  w-full p-2"
        >
          {inputfield?.options?.map((item, index) => (
            <option value={item.value}  key={index}  className="flex gap-x-2 px-3 py-1" >
                {item.name}
                </option>
          ))}
         
        </select>
      </div>
      {/* {errors[inputfield.name] && (
        <div className="ml-2 text-xs text-red-500">
          {errors[inputfield.name]?.message}
        </div>
      )} */}
    </div>
  );
};

export default CustomDropDown;
