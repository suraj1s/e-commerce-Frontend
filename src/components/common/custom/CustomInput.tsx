"use client";
import { EyeIcon } from "@/assets/icons";
import React, { useState } from "react";


export type inputField = {
  title?: string,
  className?: string,
  validation?: Obj,
  name: string,
  icon?: React.ReactNode,
  placeholder?: string,
  type?:
    "number"
    | "text"
    | "password"
    | "email"
    | "date"
    | "time"
    | "datetime-local"
    | "hidden"
    | "month"
    | "search"
    | "tel"
    | "url"
    | "week",
  options?: Obj[],
  eyeIcon?: React.ReactNode;
  defaultValue?: any;
  titleclassName?: string;
  autoFocus?: boolean;
  inputClassName?: string;

}

type Prop = {
  errors: any;
  register: any;
  inputfield: inputField;

};

const CustomInput = ({
  inputfield,
  register,
  errors,
}: Prop) => {
  const [type, setType] = useState<string>(inputfield.type ?? "text");

  const onclickHandler = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-2">
        {
          inputfield.title &&
        <span className={`${inputfield.titleclassName} text-base font-medium text-gray-700`}>
          {inputfield.title}
          {inputfield?.validation?.required?.value && inputfield.title && (
            <span className="text-error-600">*</span>
          )}
        </span>
        }
        <label
          htmlFor={inputfield.name}
          style={{
            boxShadow: "0px 1px 2px 0px rgba(14, 24, 41, 0.05)",
          }}
          className={`${inputfield.className} rounded-xl border-[1px] border-gray-300 bg-white shadow-lg relative flex w-full items-center gap-3 overflow-hidden px-[14px] py-[10px]`}
        >
          {inputfield.icon && <div className="text-lg">{inputfield.icon}</div>}
          <input
            {...register(inputfield.name, inputfield.validation)}
            autoFocus={inputfield.autoFocus}
            type={type}
            id={inputfield.name}
            defaultValue={inputfield.defaultValue}
            autoComplete="new-password"
            placeholder={inputfield.placeholder}
            className={` ${inputfield.inputClassName} w-full text-base text-gray-500 outline-none placeholder:text-sm`}
          />
          {inputfield.eyeIcon && (
            <div className="absolute right-3 top-0 flex h-full cursor-pointer items-center justify-center">
              <EyeIcon onClick={onclickHandler} className="h-4 w-4" />
            </div>
          )}
        </label>
        {errors[inputfield.name] && (
          <div className="ml-2 text-xs text-red-500">
            {errors[inputfield.name]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
