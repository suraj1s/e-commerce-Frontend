"use client"
import {  useEffect, useMemo, useState } from 'react';
import ItemCart from './integrate/ItemCart';
import { useGetProductsQuery } from '@/redux/redux-slices/product/apiService/product';



const ProductList = () => {
    const [products, setProducts] = useState <productType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            console.log(data)
            setProducts(data.products)
            
        }
        fetchData()
    } , [])

    const memoizedProducts = useMemo(() => products, [products]);
    const [ getProduct ] = useGetProductsQuery();
    const response: any =  getProduct()
    console.log(response)

    console.log(products)
  return (
    <>
        <h1>All products</h1>
    <div className='flex flex-wrap  h-fit px-4 py-6 gap-y-10  gap-x-10'>
        {
            memoizedProducts?.map((item , index) => (
                <div key={index} >
                   <ItemCart item={item}/>
                </div>
            ))
        }
       

    </div>
    </>
  )
}

export default ProductList

