import { productType } from '@/redux/redux-slices/product/product'
import { useLazySearchProductTitleQuery } from '@/redux/redux-slices/product/productApi'
import { setProductSearchQuery } from '@/redux/redux-slices/product/productSlice'
import { useAppDispatch } from '@/redux/redux-store/hooks'
import React, { useEffect, useState } from 'react'

interface SearchDropdownProps {
    setSearchModal : React.Dispatch<React.SetStateAction<boolean>>
    inputRef: any
    searchText: string
}

const SearchDropdown = ( {setSearchModal , inputRef , searchText} : SearchDropdownProps) => {
    const  [ searchProductTitle ,{data : searchedProductTitle , isFetching : searchTitleFetching} ] = useLazySearchProductTitleQuery();
    const [finalProductTitle, setFinalProductTitle] = useState<productType[]>([])
    const dispatch = useAppDispatch()


      //  fetch searched producte
  useEffect(() => {
    searchText !== "" && searchText !== null && searchProductTitle({searchQuery : searchText})
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
[ searchText   ])

   useEffect(() => {
    if(searchedProductTitle   ){
        setFinalProductTitle( searchedProductTitle.products)    }
  },// eslint-disable-next-line react-hooks/exhaustive-deps
   [searchedProductTitle])

   const hendelSearch = (data : productType)=> {
    dispatch(setProductSearchQuery(data.title))
    inputRef.current.value = data.title
    setSearchModal(false)
   }
  return (
    <div className='absolute bg-gray-100 text-gray-700 mt-1 rounded-xl  h-fit w-full px-6 flex flex-col  '>
        {
            finalProductTitle.map( (data , i) => (
                <div key={i}  >
                    <h1 className='border-b-[1px] py-3 hover:cursor-pointer  border-gray-300' onClick={ () => hendelSearch(data)}>
                    {data.title}
                    </h1>
                </div>
            ))
        }
    </div>
  )
}

export default SearchDropdown