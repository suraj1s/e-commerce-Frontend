"use client"
import { SearchIcon, XIcon } from "@/assets/icons";
import { setProductSearchQuery } from "@/redux/redux-slices/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/redux-store/hooks";
import React, { useEffect, useRef, useState } from "react";
import SearchDropdown from "./SearchDropdown";
import { set } from "react-hook-form";
interface SearchProps {
  placeholder?: string;
  className?: string;
}

const Search = ({placeholder = "Search", className } : SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchText, setSearchText] = useState("")
  const inputRef = useRef(null)
  const [searchModal, setSearchModal] = useState(false)
  const dispatch = useAppDispatch()

  const hendelChange =  (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(()=> e.target.value)
    setSearchModal(true)
  }
console.log(searchModal)
   useEffect(() => {
    if(searchText.length > 1) {
      const cleartime = setTimeout(() => {
        setSearchQuery(searchText)
      }, 100);
      return () => {
        clearTimeout(cleartime)
      }
    }
    else {
      setSearchQuery(searchText)
    }
    },  // eslint-disable-next-line react-hooks/exhaustive-deps 
  [searchText])

  const handelSearch = () => {
    dispatch(setProductSearchQuery(searchQuery))
    setSearchModal(false)
  }
  const hendelCancelsearch = ()=> {
    // @ts-ignore
    inputRef.current.value = ""
    setSearchQuery(""); 
    handelSearch()
  }

  const handelSpecialKey = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      handelSearch()
      setSearchModal(false)
    }
     else if(e.key === "Backspace" && searchText.length === 0) {
       console.log("backspace")
       setSearchQuery("")
       handelSearch()
    }
    // else if(e.key === "Backspace" && searchText.length > 0) {
    //   setSearchQuery(searchText)
    //   handelSearch()
    // }
    
  }
  return (
    <div className={ ` ${ className } relative w-full text-gray-500`}>
      <SearchIcon className={ ` absolute bottom-0 left-2 top-0 m-auto h-[20px] w-[20px]`}/>
      <input
        type="text"
        ref={inputRef}        
        onChange={(e) => hendelChange(e) }
        onKeyUp={(e) => handelSpecialKey(e) }
        placeholder={placeholder }
        className="customInputCSS w-full px-[14px] py-[10px] pl-[35px] text-gray-700 outline-none"
      />
      <button className={ ` absolute bottom-2 right-4  top-0 m-auto h-[20px] hover:cursor-pointer `} onClick={hendelCancelsearch}>
      <XIcon  className = " w-[30px]"  />
      </button>
     { searchText && searchModal && <SearchDropdown inputRef = {inputRef}  setSearchModal = {setSearchModal} searchText = {searchText}/>     }
     {
      searchModal && searchText    && 
     <div className="w-screen h-screen -z-50 fixed top-0 left-0  popupmodalblur" onClick={()=> setSearchModal(false)} /> 
     }
    </div>
  );
};

export default Search;
