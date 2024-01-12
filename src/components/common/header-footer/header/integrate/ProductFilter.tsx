import { ArrowDownIcon } from '@/assets/icons'
import React, { useState } from 'react'

const ProductFilter = () => {
    const [filterTitle, setFilterTitle] = useState("Filter")
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const filterItems = [
        {
        name : 'price low to high',
        value : 'price low to high'
      },
      {
        name : 'price high to low',
        value : 'price high to low'
      },
      {
        name : 'newest',
        value : 'newest'
      },
      {
        name : 'oldest',
        value : 'oldest'
      }]
  return (
        <div className=' bg-gray-300 text-gray-800 px-4 py-1 rounded-2xl '>
        <div className='flex gap-x-2 items-center ' onClick={()=> setIsFilterOpen(!isFilterOpen)}>
            {isFilterOpen && 
        <div className='h-screen w-screen fixed top-0 left-0  ' onClick={()=> setIsFilterOpen(false)} />
            }
            <p>
        {filterTitle} 
            </p>
        <ArrowDownIcon className = ' h-6 text-gray-800 ' />
        </div>
        {
            isFilterOpen && 
            <div className=' absolute right-8 top-0  bg-gray-200 text-gray-700 px-4 py-1 rounded-2xl my-1 h-fit whitespace-nowrap transition-all ' >
                {
                    filterItems.map((item, index) => (
                        <div key={index} className='hover:cursor-pointer'>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        }
        <div>
        </div>
        
      </div>
  )
}

export default ProductFilter