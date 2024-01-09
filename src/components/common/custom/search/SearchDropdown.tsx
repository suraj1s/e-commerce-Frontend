import { useAppSelector } from '@/redux/redux-store/hooks'
import Link from 'next/link'
import React from 'react'

const SearchDropdown = () => {
    const searchQuery = useAppSelector(state => state.products.productSearchQuery)
    const searchedData = [
        {
            title : "iphone ",
            link : "/dashboard"
        },
        {
            title : "iphone ",
            link : "/dashboard"
        },
        {
            title : "iphone ",
            link : "/dashboard"
        },
        {
            title : "iphone ",
            link : "/dashboard"
        },
    ]
  return (
    <div className='absolute bg-gray-100 text-gray-700 mt-1 rounded-xl  h-fit w-full px-6 flex flex-col  '>
        {
            searchedData.map( (data , i) => (
                <div key={i}  >
                    <h1 className='border-b-[1px] py-3 hover:cursor-pointer  border-gray-300' onClick={()=> console.log("searched" , data.title , i)}>
                    {data.title}
                    </h1>
                </div>
                // <Link href={data.link} key={i}  >
                //     <h1 className='border-b-[1px] border-gray-300' onClick={()=> console.log("searched" , data.title , i)}>
                //     {data.title}
                //     </h1>
                // </Link>
            ))
        }
    </div>
  )
}

export default SearchDropdown