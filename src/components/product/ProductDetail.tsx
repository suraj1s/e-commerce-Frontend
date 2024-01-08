"use client"
import { useGetProductQuery } from '@/redux/redux-slices/product/apiService/product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ProductDetail = ( {id} : {id : number}) => {
  const  {data : productData , isLoading} = useGetProductQuery(id);
  const [finalProducts , setFinalProducts ] = useState<productType  >({})
  useEffect(() => {
    if(productData){
      setFinalProducts( productData)

    }
  },
  [productData])
  return (
    <div className='group w-full  bg-gray-200 p-3 rounded-lg border-[1px] border-gray-100 shadow-md  hover:cursor-pointer flex flex-col gap-x-4'>
    <div className='  rounded-md '>
        <Image src={finalProducts?.thumbnail} alt={finalProducts?.title} width={500} height={500} className='  object-cover  object-center' />
    </div>
        
    <div className='text-lg font-medium flex flex-col gap-y-2 pt-3  '>
        <p className='text-lg text-gray-800 font-bold '>
            <p className='   whitespace-nowrap group-hover:w-full group-hover:whitespace-normal  '>
            { finalProducts?.title} 
            </p>
        </p>
        <p>{finalProducts?.price}</p>
        <div className='flex gap-x-5'>
        <p className='line-through'>1000</p>
        <p>-{finalProducts?.discountPercentage}%</p>
        </div>
        <p> low or out {finalProducts?.stock}</p>
        <p> rating {finalProducts?.rating}</p>
        <p> rating {finalProducts?.description}</p>
</div>
</div>
  )
}

export default ProductDetail