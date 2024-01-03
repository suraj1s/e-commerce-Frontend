import { FilterLineIcon } from "@/assets/icons";
import React from "react";

type Props = {};

const CustomFilter = (props: Props) => {
  return (
    <div className="customInputCSS flex items-center gap-x-2 px-[18px] py-[10px]">
      <FilterLineIcon className="h-5 w-5" />
      <h5 className="font-semibold text-gray-700">Filter</h5>
    </div>
  );
};

export default CustomFilter;
