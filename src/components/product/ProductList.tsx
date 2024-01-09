"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ItemCart from './integrate/ItemCart';
import { useLazyGetProductsQuery, useLazySearchProductsQuery } from '@/redux/redux-slices/product/apiService/product';
import { useAppSelector } from '@/redux/redux-store/hooks';

const ProductList = () => {
  const [finalProducts , setFinalProducts ] = useState<productType[]>([])
  const pageLimit = 20;
  const [pageNumber, setPageNumber] = useState(0)

  const productSearchQuery = useAppSelector(state => state.products.productSearchQuery)
 
  const [ getProducts ,  {data : productData ,  isLoading, isFetching}] = useLazyGetProductsQuery();

  const  [ searchProduct ,{data : searchedProducts , isFetching : searchFetching} ] = useLazySearchProductsQuery();

  console.log(finalProducts)

  // fetch all products 
  useEffect(() => {
    if(productSearchQuery === ""){
      getProducts({
            limit: pageLimit,  
            currentPage :  pageNumber,
          })
    }
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [ pageNumber  ])

  useEffect(() => {
    if(productSearchQuery === ""){
      setPageNumber(0)
      getProducts({
         limit: pageLimit,  
         currentPage :  0,
       })}
      }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [  productSearchQuery  ])
 
  useEffect(() => {
    if(productData  ){
      setFinalProducts(  [  ...finalProducts ,  ...productData.products])    }
  },// eslint-disable-next-line react-hooks/exhaustive-deps
   [productData])

  useEffect(() => {
    if(productData  && productSearchQuery === "" && pageNumber === 0){
      setFinalProducts( productData.products)    }
  },// eslint-disable-next-line react-hooks/exhaustive-deps
   [productData])

  //  fetch searched producte
  useEffect(() => {
    productSearchQuery !== "" && searchProduct({searchQuery : productSearchQuery})
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
[ productSearchQuery   ])

   useEffect(() => {
    if(searchedProducts   ){
      setFinalProducts( searchedProducts.products)    }
  },// eslint-disable-next-line react-hooks/exhaustive-deps
   [searchedProducts])



  // // for infinite scroll
  const hasMore = ((pageNumber * 10) + 10 ) < productData?.total
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemElementRef = useCallback((node: HTMLElement | null) => {
    if (isLoading) return;
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

