import CheckoutAddressDetail from '@/components/checkout/CheckoutAddressDetail'
import CheckoutCartDetail from '@/components/checkout/CheckoutCartDetail'
import CheckoutPaymentDetail from '@/components/checkout/CheckoutPaymentDetail'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col lg:flex-row space-x-10 space-y-8 pt-10  container justify-center '>
      <div>
      <CheckoutAddressDetail />
      <CheckoutPaymentDetail />
      </div>
      <div >
        <CheckoutCartDetail />
      </div>
    </div>
  )
}

export default page