"use client"
import { useEffect, useRef, useState } from 'react';
import ItemCart from './integrate/ItemCart';
import { useGetProductsQuery } from '@/redux/redux-slices/product/apiService/product';

const ProductList = () => {
  const [finalProducts , setFinalProducts ] = useState<productType[]>([])
  const {data : productData} = useGetProductsQuery({});

  useEffect(() => {
    if(productData){
      setFinalProducts(productData.products)
    }
  }, [productData])
  
  // const fetchMoreTrigger = useRef<HTMLDivElement>(null);

  //   const elementRef = useRef<any>();
  // const [position, setPosition] = useState<{x: number | undefined  , y: number | undefined} >({ x: 0, y: 0 });

  // useEffect(() => {
  //   function handleResize() {
  //     const x = elementRef?.current?.offsetLeft;
  //     const y = elementRef?.current?.offsetTop;
  //     setPosition({ x, y });
  //   }

  //   handleResize(); // initial call to get position of the element on mount
  //   window.addEventListener("scroll", handleResize);
  //   return () => window.removeEventListener("scroll", handleResize);
  // }, [elementRef]);

  return (
    <>
    <h1>All products</h1>
    <div className='grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-fit mobile:px-4  mobile:py-6 gap-y-10 gap-x-10'>
        {
            finalProducts?.map((item , index) => (
                <div key={index} >
                   <ItemCart item={item}/>
                </div>
            ))
        }
    </div>
    {/* <div className='flex fixed top-96 left-0  gap-x-5 text-xl font-bold '  ref={elementRef}>
      <p>{position.x}</p>
      <p>{position.y}</p>
    </div> */}
    </>
  )
}
export default ProductList

