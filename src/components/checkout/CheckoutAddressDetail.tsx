"use client";

import React from "react";
import CheckoutFormModal from "./CheckoutFormModal";
import { useDeleteAddressMutation, useGetAddressQuery, useUpdateAddressMutation } from "@/redux/redux-slices/checkout/checkoutApi";
import CustomButton from "../common/custom/CustomButton";
import { mutationHandler } from "@/utils/mutationalHandler";

const CheckoutAddressDetail = () => {
  const { data: address } = useGetAddressQuery({});
  const [deleteAddress] = useDeleteAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  return (
    <div className="flex flex-col space-y-5">
      <p>Plese Choose a address to deliver </p>
      <div>
        {address?.results?.map((address, index: any) => (
          <div key={index} className="border p-4 mb-4 rounded-md shadow-md  ">
            <input
              type="radio"
              name="address"
              value={address.id}
              className="mr-2 cursor-pointer"
            />
            <div className=" flex gap-x-5 ">
            <div className="mb-2">
              <p className="font-semibold">{address?.full_name}</p>
              <p>{address?.email}</p>
              <p>{address?.phone}</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Address:</p>
              <p>{address?.street_address}</p>
              <p>
                {address?.city}, {address?.state}
              </p>
              <p>
                {address?.country} - {address?.postal_code}
              </p>
            </div>
            <div className="flex flex-col space-y-2">

            <CustomButton title="Edit" className="!w-fit !h-fit" 
           />
            <CustomButton title="Delete" className="!w-fit !h-fit"
            onCLick={()=> {
              mutationHandler(
                deleteAddress,
                address.id,
                ()=> {},
                "Address Deleted Successfully" ,
              )
            }} />
            </div>
            </div>
          </div>
        ))}
      </div>

      <CheckoutFormModal />
    </div>
  );
};

export default CheckoutAddressDetail;
