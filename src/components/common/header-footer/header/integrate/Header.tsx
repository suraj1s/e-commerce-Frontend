import { Logo } from '@/assets/images'
import Search from '@/components/common/custom/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <div className='bg-gray-900 text-gray-100'>
    <div className=' flex flex-col md:flex-row  flex-shrink-0 container p-3 items-center  font-semibold  capitalize '>
      <div className='flex small-mobiles:flex-nowrap flex-wrap text-xs mobile:text-sm  gap-x-5 items-center w-full justify-around  flex-shrink-0'>
       <a href='/dashboard' className='flex gap-x-5 items-center'>
      <Image  src={Logo} alt='logo' className='h-10 w-10'/>
      <p className='pr-10'>welcome</p>
      </a> 
      <div className='hidden md:block w-full'>
      <Search  placeholder='Search Product '  />

      </div>
      <Link  href={"/profile"} >   Profile</Link >
      <Link  href={"/return-and-order"} >  Return <span className='whitespace-nowrap'> and Order </span> </Link >
      <Link href={"/cart"} >  Cart</Link >
      </div>
      <div className='block md:hidden w-full'>
      <Search  placeholder='Search Product '  />

      </div>
    </div>

    </div>
  )
}

export default Header