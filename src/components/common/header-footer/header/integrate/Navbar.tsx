"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import SideNavbar from './SideNavbar'
import CustomFilter from '@/components/common/custom/CustomFilter'
import CustomDropDown from '@/components/common/custom/CustomDropDown'

const Navbar = () => {
  const navItems = [
    {
      name : "Today's Deals",
      link : "/",
    },
    {
      name : "Limited Offers",
      link : "/",
    },
    {
      name : "Most Popular Products",
      link : "/",
    },
  ]
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false)
  return (
    <div className='bg-gray-700 text-gray-300'>
    <div className='flex container font-semibold flex-wrap justify-between py-3 capitalize'>
      <div className='flex gap-x-5  flex-wrap '>
      <div className='flex gap-x-2  items-center hover:cursor-pointer' onClick={()=> setIsSideNavbarOpen((prev) => !prev)}>
        
        <div className='flex flex-col  font-light  text-xl leading-[5px] -tracking-[5px]'>
          <p>---</p>
          <p>---</p>
          <p>---</p>
        </div>
        All
      </div>
      {
        isSideNavbarOpen && 
        <div>
          <SideNavbar handelClose = {setIsSideNavbarOpen}  />

        </div>
      }
     {
     navItems.map((item, index) => (
      <div key={index} className='hover:cursor-pointer'>
        <Link href={item.link} >
        {item.name}
        </Link>
      </div>
     ))}
      </div>
      <div>
        <CustomDropDown 
         
        options={[
          {
          name : 'price low to high',
          value : 'price low to high'
        },
        {
          name : 'price high to low',
          value : 'price high to low'
        },
        {
          name : 'newest',
          value : 'newest'
        },
        {
          name : 'oldest',
          value : 'oldest'
        }] }
        />
      </div>
    </div>

    </div>
  )
}

export default Navbar