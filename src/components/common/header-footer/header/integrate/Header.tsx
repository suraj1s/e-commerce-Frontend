import { Logo } from '@/assets/images'
import Search from '@/components/common/custom/Search'
import Image from 'next/image'
import React from 'react'

const Header = () => {

  return (
    <div className='bg-gray-900 text-gray-100'>
    <div className=' flex flex-col md:flex-row  flex-shrink-0 container p-3 items-center  font-semibold  capitalize '>
      <div className='flex gap-x-5 items-center w-full justify-around  flex-shrink-0'>
      <Image  src={Logo} alt='logo' className='h-10 w-10'/>
      <p>welcome</p>
      <div className='hidden md:block w-full'>
      <Search  placeholder='Search Product '  />

      </div>
      <div> Profile</div>
      <div >Return <span className='whitespace-nowrap'> and Order </span> </div>
      <div>Cart</div>
      </div>
      <div className='block md:hidden w-full'>
      <Search  placeholder='Search Product '  />

      </div>
    </div>

    </div>
  )
}

export default Header