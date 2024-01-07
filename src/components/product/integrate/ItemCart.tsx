"use client"
import Image from 'next/image';
import Link from 'next/link';

const ItemCart = ( {item , index } : { item : productType , index : number}) => {
   
  return (
    <Link href={`/product/${item.id}`}>
        <div className='group w-full  bg-gray-200 p-3 rounded-lg border-[1px] border-gray-100 shadow-md  hover:scale-110 transition-all hover:cursor-pointer flex flex-row  mobile:flex-col gap-x-4'>
            <div className='  rounded-md overflow-hidden'>
                <Image src={item.thumbnail} alt={item.title} width={500} height={500} className=' w-56 max-w-[45vw] h-48 mobile:w-full mobile:h-40 object-cover group-hover:scale-110 object-center' />
            </div>
            <div className='text-mobile font-medium flex flex-col gap-y-2 pt-3  overflow-hidden'>
                <p className='text-lg text-gray-800 font-bold '>
                    <p className='  overflow-hidden whitespace-nowrap group-hover:w-full group-hover:whitespace-normal  '>
                    { item.title} 
                    </p>
                </p>
                <p>{item.price}</p>
                <div className='flex gap-x-5'>
                <p className='line-through'>1000</p>
                <p>-{item.discountPercentage}%</p>
                </div>
                <p> low or out {item.stock}</p>
                <p> rating {item.rating}</p>
        </div>
        </div>
    </Link>
         )
}

export default ItemCart