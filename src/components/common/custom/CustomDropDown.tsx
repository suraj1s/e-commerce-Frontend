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
      <div className=" relative rounded-lg  customInputCSS ">
        <ArrowDownIcon  className = "w-6 h-6 absolute right-2 top-2 text-primary-700"/>
        <select
          {...register(inputfield.name)}
          className="appearance-none outline-none  rounded-lg text-primary-700  w-full p-2 "
        >
          {inputfield?.options?.map((item, index) => (
            <option value={item.value}  key={index}  className="flex gap-x-2 px-3 py-1  text-red-600" >
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
