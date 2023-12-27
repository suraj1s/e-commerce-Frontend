import { SearchIcon } from "@/assets/icons";
import React from "react";

const Search = () => {
  return (
    <div className="relative w-full max-w-[320px] text-gray-500">
      <SearchIcon className="absolute bottom-0 left-2 top-0 m-auto h-[20px] w-[20px]" />
      <input
        type="text"
        placeholder="Search"
        className="customInputCSS w-full px-[14px] py-[10px] pl-[35px] text-gray-700 outline-none"
      />
    </div>
  );
};

export default Search;
