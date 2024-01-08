import { useGetProductQuery } from '@/redux/redux-slices/product/apiService/product';
import React, { useEffect, useState } from 'react'

const ProductDetail = ( {productId} : {productId : number}) => {
  const  {data : productData , isLoading} = useGetProductQuery({productId});
  const [finalProducts , setFinalProducts ] = useState<productType>()

  useEffect(() => {
    
    if(productData){
      setFinalProducts( productData.product)
    }
  },
  [productData  ])
  return (
    <div>
       <h1> {finalProducts?.title } </h1>
    </div>
  )
}

export default ProductDetail