import { SearchIcon } from "@/assets/icons";
import React from "react";
interface SearchProps {
  placeholder?: string;
  className?: string;
}

const Search = ({placeholder = "Search", className} : SearchProps) => {
  return (
    <div className={ ` ${ className } relative w-full text-gray-500`}>
      <SearchIcon className={ ` absolute bottom-0 left-2 top-0 m-auto h-[20px] w-[20px]`}/>
      <input
        type="text"
        placeholder={placeholder }
        className="customInputCSS w-full px-[14px] py-[10px] pl-[35px] text-gray-700 outline-none"
      />
    </div>
  );
};

export default Search;
