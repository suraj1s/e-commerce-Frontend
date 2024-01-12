"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ItemCart from './integrate/ItemCart';
import { useLazyGetProductsQuery, useLazySearchProductsQuery } from '@/redux/redux-slices/product/apiService/product';
import {  useAppSelector } from '@/redux/redux-store/hooks';
import { set } from 'react-hook-form';

const ProductList = () => {
  const [finalProducts , setFinalProducts ] = useState<productType[]>([])
  const pageLimit = 20;
  const [pageNumber, setPageNumber] = useState(0)

  const productSearchQuery = useAppSelector(state => state.products.productSearchQuery)
 
  const [ getProducts ,  {data : productData ,  isLoading, isFetching}] = useLazyGetProductsQuery();
  const  [ searchProduct ,{data : searchedProducts , isFetching : searchFetching} ] = useLazySearchProductsQuery();

// console.log(searchedProducts , "searchedProducts" , productData , "productData" , productSearchQuery , "productSearchQuery" , finalProducts , "finalProducts")

  // fetch all products 
  useEffect(() => {
    console.log("useeffect 1 called ")
    if(productSearchQuery === null || productSearchQuery == ""){
      getProducts({
            limit: pageLimit,  
            currentPage :  pageNumber,
          })
    }
      }, 
  [ pageNumber ])

  useEffect(() => {
    console.log("useeffect 2 called ")
    setPageNumber(0)
    if(productSearchQuery === null || productSearchQuery == ""){
      getProducts({
         limit: pageLimit,  
         currentPage :  0,
       })}
      }, 
  [  productSearchQuery  ])
 
  useEffect(() => {
    console.log("useeffect 3 called ")
    if(productData  ){
      setFinalProducts(  [ ...finalProducts ,  ...productData.products])    }
  },
   [productData])

  useEffect(() => {
    console.log("useeffect 4 called ")
    setPageNumber(0)
    if(  productSearchQuery == "" ){
      setFinalProducts( productData.products) 
       }
  },
   [ productSearchQuery] )

  //  fetch searched producte
  useEffect(() => {
    console.log("useeffect 5 called ")
    setPageNumber(0)
    productSearchQuery &&  productSearchQuery !== "" && productSearchQuery !== null && searchProduct({searchQuery : productSearchQuery})
    }, 
[ productSearchQuery  ])

   useEffect(() => {
    console.log("useeffect 6 called ")
    productSearchQuery !== "" && productSearchQuery !== null &&
      setFinalProducts( searchedProducts.products) 
  },
   [searchedProducts])


  // // for infinite scroll
  const hasMore = ((pageNumber * 10) + 10 ) < productData?.total
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemElementRef = useCallback((node: HTMLElement | null) => {
    if (isLoading ) return;
    if(searchedProducts?.products.length !== 0 && productSearchQuery === "")  return;
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
         productSearchQuery && searchFetching && <div className=' text-center py-5  text-black font-bold text-3xl'>Searching...</div>}
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
          isFetching && <div className=' text-center py-5  text-black font-bold text-3xl'>Loading...</div>}
    </>
  )
}
export default ProductList

