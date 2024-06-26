"use client"
import { Logo } from '@/assets/images'
import Search from '@/components/common/custom/search/Search'
import { useGetcartsQuery } from '@/redux/redux-slices/cart/cartApi'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Cookies = require('js-cookie')

const Header = () => {
  const { data: cartData } = useGetcartsQuery({});
  return (
    <div className='bg-primary-900 text-primary-100'>
    <div className=' flex flex-col md:flex-row  flex-shrink-0 container p-3 items-center  font-semibold  capitalize '>
      <div className='flex small-mobiles:flex-nowrap flex-wrap text-xs mobile:text-sm  gap-x-5 items-center w-full justify-around  flex-shrink-0'>
       <a href='/dashboard' className='flex gap-x-5 items-center'>
      <Image  src={Logo} alt='logo' className='h-10 w-10'/>
      <p className='pr-10'>welcome</p>
      </a> 
      <div className='hidden md:block w-full'>
      <Search  placeholder='Search Product '  />

      </div>
      <Link  href={"/dashboard/profile"} >   Profile</Link >
      <Link  href={"/dashboard/return-and-order"} >  Return <span className='whitespace-nowrap'> and Order </span> </Link >
      <Link href={"/dashboard/cart"}  className='flex gap-x-1 relative '>
        <span>
         Cart
        </span>
        <span className='bg-red-700 p-1 h-4 w-5 rounded-full    absolute flex justify-center items-center text-[10px] font-normal -right-6 '> 
         {cartData?.count} 
        </span>
         </Link >
         
         <button onClick={()=> {
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
            window.location.href = '/auth/signin'
         }} className='ml-5 bg-primary-800 rounded-xl p-3 cursor-pointer hover:bg-primary-700'>logout</button>
      </div>
      <div className='block md:hidden w-full'>
      <Search  placeholder='Search Product '  />

      </div>
    </div>

    </div>
  )
}

export default Header