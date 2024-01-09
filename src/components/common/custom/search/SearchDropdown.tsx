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
    <div className='absolute bg-gray-100 text-gray-700  h-fit w-full p-6 flex flex-col gap-y-2 '>
        {
            searchedData.map( (data , i) => (
                <Link href={data.link} key={i} className='border-b-[1px] border-gray-300' >
                    {data.title}
                </Link>
            ))
        }
    </div>
  )
}

export default SearchDropdown