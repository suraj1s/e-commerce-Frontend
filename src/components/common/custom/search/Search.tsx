"use client"
import { SearchIcon } from "@/assets/icons";
import { setProductSearchQuery } from "@/redux/redux-slices/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/redux-store/hooks";
import React, { useEffect, useState } from "react";
import SearchDropdown from "./SearchDropdown";
interface SearchProps {
  placeholder?: string;
  className?: string;
}

const Search = ({placeholder = "Search", className } : SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchModal, setSearchModal] = useState(false)
  const [searchedQuery, setSearchedQuery] = useState("")
  const dispatch = useAppDispatch()
  const searchedValue = useAppSelector( state => state.products.productSearchQuery)
  useEffect(() => {
    searchedValue &&
    setSearchedQuery(searchedValue)
  }, [searchedValue])
  
  const hendelChange =  (e : React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSearchQuery(()=> e.target.value)
    // 
  }

  useEffect(() => {
    if(searchQuery.length > 1) {
      const cleartime = setTimeout(() => {
        dispatch(setProductSearchQuery(searchQuery))
      }, 300);
      return () => {
        clearTimeout(cleartime)
      }
    }
    else {
      dispatch(setProductSearchQuery(searchQuery))
    }
  },  // eslint-disable-next-line react-hooks/exhaustive-deps 
  [searchQuery])
  
  return (
    <div className={ ` ${ className } relative w-full text-gray-500`}>
      <SearchIcon className={ ` absolute bottom-0 left-2 top-0 m-auto h-[20px] w-[20px]`}/>
      <input
        type="text"
        value={searchedQuery }
        onChange={(e) => hendelChange(e) }
        onClick={()=>setSearchModal(true)}
        placeholder={placeholder }
        className="customInputCSS w-full px-[14px] py-[10px] pl-[35px] text-gray-700 outline-none"
      />

     { searchQuery && searchModal && <SearchDropdown  setSearchModal = {setSearchModal}/>     }
     {
      searchModal && searchQuery    && 
     <div className="w-screen h-screen -z-50 fixed top-0 left-0  popupmodalblur" onClick={()=> setSearchModal(false)} /> 
     }
    </div>
  );
};

export default Search;
