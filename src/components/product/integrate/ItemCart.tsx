import { productType } from '@/redux/redux-slices/product/product';
import Image from 'next/image';
import Link from 'next/link';

const ItemCart = ( {item , index } : { item : productType , index : number}) => {
  return (
    <Link href={`/dashboard/product/${item.id}`} >
        <div className='group w-full  bg-primary-900 p-3 rounded-lg border-[1px] border-primary-300 shadow-md  hover:shadow-2xl transition-all hover:cursor-pointer flex flex-row  mobile:flex-col gap-x-4  '>
            <div className='  rounded-md overflow-hidden'>
                <Image src={item.thumbnail} alt={item.title} width={500} height={500} className=' w-56 max-w-[45vw] h-48 mobile:w-full mobile:h-40 object-cover object-center' />
            </div>
                <h1 className=' hidden md:block text-2xl font-bold text-primary-300'>
                    {index + 1} 
                </h1>
            <div className='text-mobile font-medium flex flex-col gap-y-2 pt-3  overflow-hidden'>
                <p className='text-lg text-primary-200 font-bold '>
                    <p className='  overflow-hidden whitespace-nowrap group-hover:w-full '>
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