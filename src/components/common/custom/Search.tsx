"use client"
import { SearchIcon } from "@/assets/icons";
import { setProductSearchQuery } from "@/redux/redux-slices/product/productSlice";
import { useAppDispatch } from "@/redux/redux-store/hooks";
import React, { useEffect, useState } from "react";
interface SearchProps {
  placeholder?: string;
  className?: string;
}

const Search = ({placeholder = "Search", className } : SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useAppDispatch()
  const hendelChange = (e : React.KeyboardEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSearchQuery(()=> e.target.value)
    // 
  }

  useEffect(() => {
    const cleartime = setTimeout(() => {
      dispatch(setProductSearchQuery(searchQuery))
    }, 300);
    return () => {
      clearTimeout(cleartime)
    }
  },  // eslint-disable-next-line react-hooks/exhaustive-deps 
  [searchQuery])
  
  return (
    <div className={ ` ${ className } relative w-full text-gray-500`}>
      <SearchIcon className={ ` absolute bottom-0 left-2 top-0 m-auto h-[20px] w-[20px]`}/>
      <input
        type="text"
        onKeyUp={(e) => hendelChange(e) }
        placeholder={placeholder }
        className="customInputCSS w-full px-[14px] py-[10px] pl-[35px] text-gray-700 outline-none"
      />
    </div>
  );
};

export default Search;
