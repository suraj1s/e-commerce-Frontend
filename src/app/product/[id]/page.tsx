import ProductDetail from '@/components/product/ProductDetail'
import React from 'react'

const page = ({params} : {params : {id: number}}) => {
  return (
    <>
    <h1>
      this is product detail page {params.id}
    </h1>
    <ProductDetail productId = {params.id} />
    </>
  )
}

export default page