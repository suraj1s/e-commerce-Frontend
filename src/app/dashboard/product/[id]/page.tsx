import ProductDetail from '@/components/product/ProductDetail'
import React from 'react'

const page = ({params} : {params : {id: number}}) => {
  return (
    <div className='container'>
    <h1>
      this is product detail page 
    </h1>
    <ProductDetail id = {params.id} />
    </div>
  )
}

export default page