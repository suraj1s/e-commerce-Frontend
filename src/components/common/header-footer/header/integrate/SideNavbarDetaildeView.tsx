import { ArrowLeft } from '@/assets/icons';
import Link from 'next/link';
import React from 'react'


interface SideNavbarDetaildeViewProps {
    data : {
        name: string;
        link: string;
    }[]
    isSideNavbarLink : boolean , 
    setIsSideNavbarLink: React.Dispatch<React.SetStateAction<boolean>>
}

const SideNavbarDetaildeView = ( {data  , isSideNavbarLink, setIsSideNavbarLink } : SideNavbarDetaildeViewProps) => {
  return (
        isSideNavbarLink && 

    <div className='absolute left-0 top-0   h-screen w-80 bg-primary-100 text-primary-900 z-20 '>
        <div className='flex px-8 gap-x-2 font-semibold py-5 hover:cursor-pointer hover:bg-primary-300 uppercase' onClick={() => setIsSideNavbarLink(false)}>
            <ArrowLeft />
            <p>Main menu</p>
        </div>
    <div className=' flex flex-col gap-y-4 '>

     {
       
        data?.map((item , index) => (
            <Link href={item.link} key={index}  >
                <p className='px-8 text-base font-normal '> 
                    {item.name}
                </p>
            </Link>
        ))
    }
        </div>
    </div>
  )
}

export default SideNavbarDetaildeView