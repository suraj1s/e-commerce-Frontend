"use client";

import React from "react";
import CheckoutFormModal from "./CheckoutFormModal";
import {
  useDeleteAddressMutation,
  useUpdateAddressMutation,
} from "@/redux/redux-slices/checkout/checkoutApi";
import CustomButton from "../common/custom/CustomButton";
import { mutationHandler } from "@/utils/mutationalHandler";

const CheckoutAddressDetail = ({
  setAddressOption,
  addressOption,
  addressOptions,
}: any) => {
  const [deleteAddress] = useDeleteAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  return (
    <div className="flex flex-col space-y-5">
      <p>Plese Choose a address to deliver </p>
      <div className="flex gap-5 flex-wrap">
        {addressOptions?.results?.map((address: any, index: any) => (
          <div
            key={index}
            className={` flex gap-4 border rounded-md p-3 cursor-pointer ${
              addressOption
                ? addressOption === address.id && "!bg-slate-300"
                : addressOptions?.results[0]?.id === address.id &&
                  "!bg-slate-300"
            }   `}
          >
            <input
              type="radio"
              name="address"
              id={address.id}
              value={address.id}
              onChange={() => {
                setAddressOption(address.id);
              }}
              defaultChecked={addressOptions?.results[0]?.id === address.id}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor={address.id} className=" flex w-full gap-x-5 ">
              <div className="mb-2 cursor-pointer">
                <p className="font-semibold">{address?.full_name}</p>
                <p>{address?.email}</p>
                <p>{address?.phone}</p>
              </div>
              <div className="mb-2 cursor-pointer">
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
                <CustomButton title="Edit" className="!w-fit !h-fit" />
                <CustomButton
                  title="Delete"
                  className="!w-fit !h-fit"
                  onCLick={() => {
                    mutationHandler(
                      deleteAddress,
                      address.id,
                      () => {},
                      "Address Deleted Successfully"
                    );
                  }}
                />
              </div>
            </label>
          </div>
        ))}
      </div>

      <CheckoutFormModal />
    </div>
  );
};

export default CheckoutAddressDetail;
