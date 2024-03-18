import Link from 'next/link'
import React from 'react'

const Footers = () => {
  const footerSection = [
    {
    title: "conpany info",
    items : [
     { 
      name: "home",
      link: "",
    },
     { 
      name: "about",
      link : "",
    },
     { 
      name: "address",
      link : "",
    },
     { 
      name: "phone",
      link : "",
    },
     { 
      name: "email",
      link : "",
    },
  ],
  },
  {
    title: "social media",
    items:[
      { 
       name: "facebook",
       link: "",
     },
      { 
       name: "twitter",
       link : "",
     },
      { 
       name: "instagram",
       link : "",
     },
      { 
       name: "youtube",
       link : "",
     },
      { 
       name: "linkedin",
       link : "",
     },
   ]
},

  ]
  return (
    <div>
      <div className='w-full bg-primary-800 '>
        <div className='container'>
        <Link href='/dashboard'>
        <p className='font-bold text-primary-25 text-center py-2 '>

        Back to top
        </p>
        </Link>

        </div>
      </div>
      <div className='bg-primary-700'>
      <div className='text-primary-300 flex gap-x-20 flex-wrap container'>
      {
        footerSection.map((footer, index) => {
          return (
            <div key={index}>
              <h1 className='font-bold text-primary-100 text-lg '>{footer.title}</h1>
              
              {
                footer.items.map((item, index) => {
                  return (
                    <div key={index}>
                     <Link  href={item.link}>
                      <p className='text-primary-200 '>{item.name}</p>
                     </Link>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
      </div>

      </div>
    </div>
  )
}

export default Footers