"use client"
import Image from 'next/image';

const ItemCart = ( {item} : { item : productType}) => {
   
  return (
        <div className='group w-[220px] bg-gray-200 p-3 rounded-lg border-[1px] border-gray-100 shadow-md '>
            <div className='  rounded-md overflow-hidden'>
                <Image src={item.thumbnail} alt={item.title} width={500} height={500} className='w-full h-40 object-cover group-hover:scale-110' />
            </div>
            <div className='text-sm font-medium flex flex-col gap-y-2 pt-3 '>
                <p className='text-lg text-gray-800 font-bold '>
                    <p className=' w-[185px] overflow-hidden whitespace-nowrap group-hover:w-full group-hover:whitespace-normal  '>
                    { item.title} 
                    </p>
                </p>
                <p>{item.price}</p>
                <div className='flex gap-x-5'>
                <p>{item.discountPercentage}</p>
                <p>{item.discountPercentage}</p>
                </div>
                <p> low or out {item.stock}</p>
                <p>{item.rating}</p>
        </div>
        </div>
         )
}

export default ItemCart