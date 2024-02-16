"use client";
import CustomButton from "@/components/common/custom/CustomButton";
import {
  useCreateCartMutation,
  useGetcartsQuery,
  useUpdateCartMutation,
} from "@/redux/redux-slices/cart/cartApi";
import Image from "next/image";
import React from "react";

const CheckoutCartDetail = () => {
  const { data: cartData } = useGetcartsQuery({});
  const [createCart, { isLoading: createCartLoading }] =
    useCreateCartMutation();
  const [updateCart] = useUpdateCartMutation();
  return (
    <div className="mx-auto max-w-7xl text-gray-900  font-bold ">
      <h1 className="text-3xl border-b border-gray-200 ">Cart</h1>
      {cartData?.results?.map((item : any, index : any) => (
        <li key={index} className="flex py-6 gap-x-8">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Image
              src={item?.product?.thumbnail}
              alt={item?.product?.title}
              width={200}
              height={200}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center  justify-between flex-1 text-sm">
            <div>
              <h3>{item?.product?.title}</h3>
              <p>{item?.product?.rating}</p>
              <div className="flex">
                <p> Quantity</p>
                <select
                  name="itemqty"
                  id="itemqty"
                  className="mx-5"
                  defaultValue={item?.quantity}
                >
                  {Array.from(Array(15).keys()).map((item, index) => (
                    <option key={index} value={item + 1}>
                      {item + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <p>{item?.product?.price}</p>
              <CustomButton
                title="remove "
                className="!bg-transparent !text-primary-700 !w-fit !p-0 shadow-none"
              />
            </div>
          </div>
        </li>
      ))}
      <div className="border-t border-gray-200 py-6">
        <div className="flex justify-between text-base ">
          <div>
            <p>Subtotal</p>
            <p>Total Items</p>
          </div>
          <div>
            <p> {1000} </p>
            <p> {10} items </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default CheckoutCartDetail;
