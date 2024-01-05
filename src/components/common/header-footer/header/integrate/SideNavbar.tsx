import { ArrowRight } from '@/assets/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import SideNavbarDetaildeView from './integrate/SideNavbarDetaildeView'

interface SideNavbarProp {
    handelClose : React.Dispatch<React.SetStateAction<boolean>>
}

const SideNavbar = ({handelClose} : SideNavbarProp) => {
    const sideNavbarItems  = [
        {
            mainTitle : "Shop By Department",
            items : [
                {
                    itemTitle : "Electronics",
                    subItems : [
                        {
                            name  : "Mobiles",
                            link : "/"
                        },
                        {
                            name  : "Mobiles",
                            link : "/"
                        },
                        {
                            name  : "Mobiles",
                            link : "/"
                        },
                        {
                            name  : "Mobiles",
                            link : "/"
                        },
                        {
                            name  : "Mobiles",
                            link : "/"
                        },
                    ]
                },
                {
                    itemTitle : "Fashon",
                    subItems : [
                        {
                            name  : "Shirt",
                            link : "/"
                        },
                        {
                            name  : "Pant",
                            link : "/"
                        },
                        {
                            name  : "Cap",
                            link : "/"
                        },
                        {
                            name  : "Pant",
                            link : "/"
                        },
                        {
                            name  : "Cap",
                            link : "/"
                        },
                        {
                            name  : "Pant",
                            link : "/"
                        },
                        {
                            name  : "Cap",
                            link : "/"
                        },
                        
                    ]
                },
            ]
        },
       
    ]

    const [isSideNavbarLink , setIsSideNavbarLink] = useState(false)
  return (
    <div className='relative  '>
    <div className='fixed left-0 top-0   h-screen w-80 bg-gray-100 text-gray-900 z-20 '>
        <div className='bg-gray-800 text-gray-300 font-bold text-xl  py-5 px-8'>
            hello User
        </div>
        <div className='relative flex flex-col gap-y-4 '>
        {
            sideNavbarItems.map((item , index) => (
                <div key={index} className='flex flex-col gap-y-2'>
                    <div className='text-xl font-bold text-gray-800 px-8 pt-5'>
                        {item.mainTitle}
                    </div>
                    <div>
                        {
                            item?.items.map( (item , index) => (
                                <div key={index}>
                                    <div className='text-lg font-bold text-gray-700 flex justify-between hover:bg-gray-300 hover:cursor-pointer px-8 py-2 ' onClick={() => setIsSideNavbarLink(true)}>
                                        <h1>
                                        {item.itemTitle}

                                        </h1>
                                        <ArrowRight />
                                    </div>
                                    <div>
                                       <SideNavbarDetaildeView data = {item?.subItems} isSideNavbarLink = {isSideNavbarLink} setIsSideNavbarLink={setIsSideNavbarLink} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            )) 
        }

        </div>
    </div>
    <div  className='h-screen w-screen  fixed top-0 left-0 popupmodalblur z-10'  onClick={()=> handelClose(false)}/> 
    </div>
  )
}

export default SideNavbar