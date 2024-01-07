"use client"
import ItemCart from './integrate/ItemCart';
import { useGetProductsQuery } from '@/redux/redux-slices/product/apiService/product';

const ProductList = () => {

    const {data : productData} = useGetProductsQuery({});
    const finalProducts : productType[] = productData?.products
    console.log(productData)
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
    </>
  )
}
export default ProductList

