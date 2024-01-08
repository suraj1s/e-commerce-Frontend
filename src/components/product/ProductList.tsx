"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ItemCart from './integrate/ItemCart';
import { useLazyGetProductsQuery } from '@/redux/redux-slices/product/apiService/product';

const ProductList = () => {
  const [finalProducts , setFinalProducts ] = useState<productType[]>([])
  const pageLimit = 10
  const [pageNumber, setPageNumber] = useState(0)

  const [ getProducts ,  {data : productData , isFetching}] = useLazyGetProductsQuery();

  useEffect(() => {
     getProducts({
        limit: pageLimit,  
        currentPage :  pageNumber
      })

      }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [ pageNumber, pageLimit ])

  useEffect(() => {
    if(productData){
      setFinalProducts(  [  ...finalProducts ,  ...productData.products])
    }
  },// eslint-disable-next-line react-hooks/exhaustive-deps
   [productData])
  

  // // for infinite scroll
  const hasMore = ((pageNumber * 10) + 10 ) < productData?.total
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemElementRef = useCallback((node: HTMLElement | null) => {
    if (isFetching) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !isFetching) {
        setPageNumber( (prev ) =>  prev + 1)
      }
    });
    if (node) observer.current.observe(node);
  }, [   hasMore ,  isFetching]);
  return (
    <>
    <h1>All products</h1>
    <div className='grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-fit mobile:px-4  mobile:py-6 gap-y-10 gap-x-10'>
        {
            finalProducts?.map((item , index) => (
                <div key={index} >
                 { 
                 finalProducts.length === index + 1 ? 
                  <div
                   ref={lastItemElementRef}
                    >
                        <ItemCart item={item} index = {index}/>
                    </div>   
                    :  
                  <div>
                        <ItemCart item={item} index = {index}/>
                    </div>  }   
                </div>
            ))
          }
          
    </div>
    {
          isFetching && <div className=' text-center py-5  text-black font-bold text-3xl'>Loading...</div>}
    </>
  )
}
export default ProductList

