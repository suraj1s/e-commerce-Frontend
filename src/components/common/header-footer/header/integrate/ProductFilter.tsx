import { ArrowDownIcon } from '@/assets/icons'
import React, { useState } from 'react'

const ProductFilter = () => {
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
    const [filterTitle, setFilterTitle] = useState(filterItems[0])
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const handelFilter = (item : any) => {
        setFilterTitle(item)
        setIsFilterOpen(false)
    }
  return (
        <div className=' relative  font-medium '>
            {isFilterOpen && <div className='h-screen w-screen fixed top-0 left-0  ' onClick={()=> setIsFilterOpen(false)} />  }
       <div className='bg-gray-300 text-gray-800 px-4 py-1 rounded-2xl absolute whitespace-nowrap  right-8 top-0'>
        {
            isFilterOpen ?
            <div className=' text-sm  rounded-2xl  transition-all ' >
                {
                    filterItems.map((item, index) => { 
                        return (
                        <div key={index} className={` hover:cursor-pointer border-b-[1px] border-gray-200   p-1`} onClick={()=> handelFilter(item)}>
                           
                            <p  className={`${filterTitle.name === item.name ? "!font-bold !text-black !text-base " : ''} `}>{item.name}</p>
                        </div>
                    )
               
                })
                }
            </div>
            :
            <div className='flex gap-x-2 items-center hover:cursor-pointer text-xs' onClick={()=> setIsFilterOpen(!isFilterOpen)}>
            <p>
          Sort By:  {filterTitle.name} 
            </p>
        <ArrowDownIcon className = ' h-6 text-gray-800 ' />
        </div>
        }

       </div>
      </div>
  )
}

export default ProductFilter