import React from 'react'
import Header from './integrate/Header'
import Navbar from './integrate/Navbar'

const Headers = () => {
  return (
    <div className='sticky top-0  z-10'>
        <Header />
        <Navbar />
    </div>
  )
}

export default Headers