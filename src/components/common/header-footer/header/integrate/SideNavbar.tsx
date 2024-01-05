import Link from 'next/link'
import React from 'react'

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
            ]
        },
       
    ]
  return (
    <div className='relative  '>
    <div className='fixed left-0 top-0   h-screen w-80 bg-gray-300 text-gray-800 z-20 '>
        <div className='bg-gray-800 text-gray-300 font-bold text-xl  py-5 px-8'>
            hello User
        </div>
        <div className='px-8 flex flex-col gap-y-4 '>
        {
            sideNavbarItems.map((item , index) => (
                <div key={index} className='flex flex-col gap-y-2'>
                    <div>
                        {item.mainTitle}
                    </div>
                    <div>
                        {
                            item?.items.map( (item , index) => (
                                <div key={index}>
                                    <div>
                                        {item.itemTitle}
                                    </div>
                                    <div>
                                        {
                                            item?.subItems.map((item , index) => (
                                                <Link href={item.link} key={index} >
                                                    <p>
                                                        {item.name}
                                                    </p>
                                                </Link>
                                            ))
                                        }
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
    <div></div>
    <div  className='h-screen w-screen  fixed top-0 left-0 popupmodalblur z-10'  onClick={()=> handelClose(false)}/> 
    </div>
  )
}

export default SideNavbar