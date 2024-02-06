"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ItemCart from './integrate/ItemCart';
import { useLazyGetProductsQuery } from '@/redux/redux-slices/product/productApi';
import {  useAppSelector } from '@/redux/redux-store/hooks';
import { productType } from '@/redux/redux-slices/product/product';

const ProductList = () => {
  const [finalProducts , setFinalProducts ] = useState<productType[]>([])
  const pageLimit = 10;
  const [pageNumber, setPageNumber] = useState(0)

  const productSearchQuery = useAppSelector(state => state.products.productSearchQuery)
 
  const [ getProducts ,  {data : productData ,  isLoading}] = useLazyGetProductsQuery();

// console.log(searchedProducts , "searchedProducts" , productData , "productData" , productSearchQuery , "productSearchQuery" , finalProducts , "finalProducts")

  // fetch all products 
  useEffect(() => {
    if(productSearchQuery === null || productSearchQuery === ""){
      getProducts({
            limit: pageLimit,  
            currentPage :  pageNumber,
          })
      }
      else{
        getProducts({
          limit: pageLimit,  
          currentPage :  pageNumber,
          searchQuery : productSearchQuery
        })
      }
  }, 
  [ pageNumber , productSearchQuery ])

  useEffect(() => {
      setPageNumber(0)
      setFinalProducts([])
  }, 
  [  productSearchQuery  ])
  
  useEffect(() => {
    if(productData?.results === undefined) return;
    if(!isLoading){
      setFinalProducts(  [ ...finalProducts ,  ...productData?.results])
    }
  },
  [productData ])


  const hasMore = ((pageNumber * pageLimit) + pageLimit ) < productData?.count
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemElementRef = useCallback((node: HTMLElement | null) => {
    if (isLoading ) return;
    // if(searchedProducts?.products.length !== 0 && productSearchQuery === "")  return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !isLoading) {
        setPageNumber( (prev ) =>  prev + 1)
      }
    });
    if (node) observer.current.observe(node);
  }, [ hasMore , isLoading]);
  return (
    <>
    <h1>All products</h1>
    {
         productSearchQuery && isLoading && <div className=' text-center py-5  text-black font-bold text-3xl'>Searching...</div>}
    <div className='grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-fit mobile:px-4  mobile:py-6 gap-y-10 gap-x-10'>
        {
            finalProducts?.map((item , index) => (
                <div key={index} >
                 { 
                 finalProducts.length === index + 1
                  ? 
                  <div
                   ref={lastItemElementRef}
                    >
                       <ItemCart item={item} index = {index}/>
                    </div>   
                    :  
                  <div>
                        <ItemCart item={item} index = {index}/>
                    </div>  
                    }   
                </div>
            ))
          }
          
    </div>
    {
          isLoading && <div className=' text-center py-5  text-black font-bold text-3xl'>Loading...</div>}
    </>
  )
}
export default ProductList
