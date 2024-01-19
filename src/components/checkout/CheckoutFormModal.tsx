"use client"
import React, { useState } from 'react'
import CommonPopup from '../common/custom/CommonPopup'
import CheckoutForm from './integrate/CheckoutForm'

const CheckoutFormModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <CommonPopup  
    isModalOpen={isModalOpen}
    closeModal={() => setIsModalOpen(false)}
    >
        <CheckoutForm />
    </CommonPopup>
  )
}

export default CheckoutFormModal