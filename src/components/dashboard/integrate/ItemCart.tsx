"use client"
import Image from 'next/image';
import { use, useEffect, useMemo, useState } from 'react';

interface productType  {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const ItemCart = () => {
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

    console.log(products)
  return (
    <div className='flex flex-wrap  h-fit px-4 py-6 gap-y-10  gap-x-10'>
        {
            memoizedProducts?.map((item , index) => (
                <div key={index} className='w-80 '>
                    <div className='w-full '>
                     <Image src={item.thumbnail} alt={item.title} width={500} height={500}/>

                    </div>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.discountPercentage}</p>
                        <p>{item.brand}</p>
                        <p>{item.category}</p>
                        <p>{item.rating}</p>
                        <p>{item.stock}</p>
                        <p>{item.description}</p>
                </div>
                </div>
            ))
        }
       

    </div>
  )
}

export default ItemCart