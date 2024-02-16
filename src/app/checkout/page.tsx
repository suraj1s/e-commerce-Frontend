import CheckoutAddressDetail from '@/components/checkout/CheckoutAddressDetail'
import CheckoutCartDetail from '@/components/checkout/CheckoutCartDetail'
import CheckoutPaymentDetail from '@/components/checkout/CheckoutPaymentDetail'
import CustomButton from '@/components/common/custom/CustomButton'
import React from 'react'

const page = () => {
  return (
    <div className=''>
    <div className='flex flex-col lg:flex-row space-x-10 space-y-8 pt-10  container justify-center '>
      <div>
      <CheckoutAddressDetail />
      {/* <CheckoutPaymentDetail /> */}
      </div>
      <div >
        <CheckoutCartDetail />
      </div>
    </div>

    <CustomButton title='Place Order' className='!w-fit mx-auto my-10' />
    </div>
  )
}

export default page