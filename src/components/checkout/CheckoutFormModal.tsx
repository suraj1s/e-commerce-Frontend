"use client"
import React, { useState } from 'react'
import CommonPopup from '../common/custom/CommonPopup'
import CheckoutForm from './integrate/CheckoutForm'
import CustomButton from '../common/custom/CustomButton'

const CheckoutFormModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
    <CustomButton title='Add New' onCLick={()=> setIsModalOpen(true)}/>
    <CommonPopup  
    isModalOpen={isModalOpen}
    closeModal={() => setIsModalOpen(false)}
    >
        <CheckoutForm />
    </CommonPopup>
    </div>
  )
}

export default CheckoutFormModal