"use client";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import DropPop from "./DropPop";
import { ArrowDownIcon } from "@/assets/icons";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type Props = {
  options: Obj[];
  handleChange?: (e: Obj) => void;
  defaultValue?: Obj;
  setValue?: UseFormSetValue<FieldValues>;
  name?: string;
  errors?: Obj;
  register?: UseFormRegister<FieldValues>;
  popClassName?: string;
};

const CustomDropDown = ({
  options,
  handleChange,
  defaultValue = options[0],
  name,
  setValue,
  errors,
  register,
  popClassName,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<Obj>({});
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (active && handleChange) {
      handleChange(active);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    if (defaultValue) {
      setActive(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="p-0 h-fit text-xs"
        hidden
        {...register}
        onChange={() => {
          setValue && name && setValue(name, active);
        }}
      />
      <DropPop
        button={<DropHead active={active} length={options?.length} />}
        isOpen={isOpen}
        onOpen={() => {
          setIsOpen(true);
        }}
        onClose={() => {
          setIsOpen(false);
        }}
        popClassName={`!w-full top-full ${popClassName}`}
      >
        {options?.length > 1 && (
          <div className="customInputCSS max-h-[200px] overflow-auto py-1 ">
            {options?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActive(item);
                    if (inputRef.current) inputRef.current.value = active?.name;
                    setIsOpen(false);
                  }}
                  className="flex w-full gap-2 px-2 py-2 text-start hover:bg-slate-200"
                >
                  <span>{item?.icon}</span>
                  {item?.name}
                </button>
              );
            })}
          </div>
        )}
      </DropPop>
      {name && errors && errors[name] && (
        <div className="ml-2 text-xs text-red-500">{errors[name]?.message}</div>
      )}
    </div>
  );
};

export default CustomDropDown;

const DropHead = ({ active, length }: { active: Obj; length: number }) => {
  return (
    <div className=" customInputCSS relative flex w-full cursor-pointer items-center justify-between gap-3 overflow-hidden px-[14px] py-[10px]">
      <div className="flex items-center gap-2">
        <span>{active?.icon}</span>
        <span className="font-medium">{active?.name}</span>
      </div>
      {length > 1 && <ArrowDownIcon className="h-[20px] w-[20px]" />}
    </div>
  );
};
