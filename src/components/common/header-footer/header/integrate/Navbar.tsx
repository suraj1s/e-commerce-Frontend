"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import SideNavbar from './SideNavbar'

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
    <div className='flex container gap-x-5 font-semibold flex-wrap justify-start py-3 capitalize'>
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

    </div>
  )
}

export default Navbar