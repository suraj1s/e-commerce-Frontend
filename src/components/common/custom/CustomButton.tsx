import Link from "next/link";
import React from "react";

type Prop = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onCLick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
  path?: string;
  disabled?: boolean;
};
const CustomButton = ({
  title,
  className,
  type = "button",
  onCLick,
  loading = false,
  icon,
  path,
  disabled,
}: Prop) => {
  return path ? (
    <Link
      href={path}
      className={`flex w-full items-center text-blue-400 justify-center gap-2 rounded-lg bg-primary-800 hover:bg-primary-900 hover:text-blue-500 px-[18px] border-primary-200 border py-[10px] text-base font-semibold   shadow-sm ${
        className && className
      }`}
    >
      {icon}
      {loading ? <div className="spinner w-full"></div> : title}
    </Link>
  ) : (
    <button
      disabled={disabled}
      onClick={onCLick}
      type={type}
      className={`flex w-full items-center justify-center hover:bg-primary-800 hover:text-primary-100 gap-2 rounded-lg bg-primary-900 px-[18px] py-[10px] border-primary-200 border text-base font-semibold   shadow-sm ${
        className && className
      }`}
    >
      {icon}
      {loading ? <div className="spinner w-full"></div> : title}
    </button>
  );
};

export default CustomButton;
