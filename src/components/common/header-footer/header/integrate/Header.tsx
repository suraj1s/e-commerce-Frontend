import { Logo } from '@/assets/images'
import CustomDropDown from '@/components/common/custom/CustomDropDown'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  const countryOptions = [
    {
      value: 'Nepal',
      name: 'Nepal',
    },
    {
      value: 'India',
      name: 'India',
    },
   
    {
      value: 'USA',
      name: 'USA',
    },
    {
      value: 'UK',
      name: 'UK',
    }
  ]
  return (
    <div>
      <Image  src={Logo} alt='logo' className='h-20 w-20'/>
      <div>
        <p>Deliver Location</p>
        <div>
          <CustomDropDown options={countryOptions} popClassName='bg-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default Header