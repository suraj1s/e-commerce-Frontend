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
}

type Prop = {
  className?: string;
  inputClassName?: string;
  title?: string;
  errors: any;
  register: any;
  inputfield: inputField;
  eyeIcon?: React.ReactNode;
  defaultValue?: any;
  titleclassName?: string;
  inputtype?: string;
  autoFocus?: boolean;
};

const CustomInput = ({
  title,
  className,
  inputClassName = "",
  titleclassName = "",
  inputfield,
  register,
  errors,
  eyeIcon = false,
  defaultValue,
  autoFocus = false,
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
      <div className="space-y-[6px]">
        <span className={`${titleclassName} text-sm font-medium text-gray-700`}>
          {title}
          {inputfield?.validation?.required?.value && title && (
            <span className="text-error-600">*</span>
          )}
        </span>
        <label
          htmlFor={inputfield.name}
          style={{
            boxShadow: "0px 1px 2px 0px rgba(14, 24, 41, 0.05)",
          }}
          className={`${className} customInputCSS relative flex w-full items-center gap-3 overflow-hidden px-[14px] py-[10px]`}
        >
          {inputfield.icon && <div className="text-lg">{inputfield.icon}</div>}
          <input
            {...register(inputfield.name, inputfield.validation)}
            autoFocus={autoFocus}
            type={type}
            id={inputfield.name}
            defaultValue={defaultValue}
            autoComplete="new-password"
            placeholder={inputfield.placeholder}
            className={` ${inputClassName} w-full text-base text-gray-500 outline-none placeholder:text-sm`}
          />
          {eyeIcon && (
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
