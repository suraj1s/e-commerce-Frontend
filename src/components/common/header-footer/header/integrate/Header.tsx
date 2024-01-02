import { Logo } from '@/assets/images'
import CustomDropDown from '@/components/common/custom/CustomDropDown'
import Search from '@/components/common/custom/Search'
import Image from 'next/image'
import React from 'react'

const Header = () => {

  return (
    <div className=' flex flex-row gap-x-5 flex-shrink-0 container p-3 '>
      <Image  src={Logo} alt='logo' className='h-10 w-10'/>
      <p>welcome</p>
      <Search  placeholder='Search Product'  />
      <div> Profile</div>
      <div>Return and Order</div>
      <div>Cart</div>
    </div>
  )
}

export default Header