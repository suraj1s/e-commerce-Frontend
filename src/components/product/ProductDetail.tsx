"use client"
import { useGetProductQuery } from '@/redux/redux-slices/product/productApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CustomButton from '../common/custom/CustomButton';
import { useCreateCartMutation, useGetcartsQuery, useUpdateCartMutation } from '@/redux/redux-slices/cart/cartApi';

const ProductDetail = ( {id} : {id : number}) => {
  const  {data : productData , isLoading} = useGetProductQuery(id);
  const {data : CartData } = useGetcartsQuery({})
  const [ createCart , { isLoading : createCartLoading}] = useCreateCartMutation();
  const [updateCart ] = useUpdateCartMutation();
  // @ts-ignore

  return (
    <div className='group w-full  bg-gray-200 p-3 rounded-lg border-[1px] border-gray-100 shadow-md  flex flex-col gap-x-4'>
    <div className='  rounded-md '>
        <Image src={productData?.thumbnail} alt={productData?.title ?? "product image "} width={500} height={500} className='  object-cover  object-center' />
    </div>
        
    <div className='text-lg font-medium flex flex-col gap-y-2 pt-3  '>
        <div className='text-lg text-gray-800 font-bold '>
            <p className='   whitespace-nowrap group-hover:w-full group-hover:whitespace-normal  '>
            { productData?.title} 
            </p>
        </div>
        <p>{productData?.price}</p>
        <div className='flex gap-x-5'>
        <p className='line-through'>1000</p>
        <p>-{productData?.discountPercentage}%</p>
        </div>
        <p> low or out {productData?.stock}</p>
        <p> rating {productData?.rating}</p>
        <p> rating {productData?.description}</p>
</div>
<CustomButton  title='Add To Cart' onCLick={()=> {
  const doesExist = CartData?.results?.some( (item : any) => item.product.id ===  productData.id)
  if(doesExist){
    const cartItem = CartData?.results?.find( (item : any) => item.product.id ===  productData.id)
    const data = { quantity : cartItem?.quantity + 1}
    updateCart({ id : cartItem?.id,  data})
  }
  else {
    const data = {product : id , quantity : 1}
    createCart(data)
  }
}}/>
</div>
  )
}

export default ProductDetail