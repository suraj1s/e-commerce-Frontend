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
      className={`flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-[18px] py-[10px] text-base font-semibold text-white shadow-sm ${
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
      className={`flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-[18px] py-[10px] text-base font-semibold text-white shadow-sm ${
        className && className
      }`}
    >
      {icon}
      {loading ? <div className="spinner w-full"></div> : title}
    </button>
  );
};

export default CustomButton;
