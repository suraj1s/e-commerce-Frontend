"use client";
import CustomButton from "@/components/common/custom/CustomButton";
import {
  useDeleteCartMutation,
  useUpdateCartMutation,
} from "@/redux/redux-slices/cart/cartApi";
import Image from "next/image";
import React from "react";

const Cart = ({cartData}: any) => {
  const [updateCart] = useUpdateCartMutation();
  const [deleteCart] = useDeleteCartMutation();
  const subTotal = cartData?.results?.reduce(
    (acc: number, item: any) => acc + item?.product?.price * item?.quantity,
    0
  );
  const totalItems = cartData?.results?.reduce(
    (acc: number, item: any) => acc + item?.quantity,
    0
  );
  return (
    <div className="mx-auto max-w-7xl font-bold ">
      <h1 className="text-3xl border-b py-5 my-5 border-primary-200 ">Cart</h1>
      {cartData?.results?.map((item: any, index: any) => (
        <li key={index} className="flex py-6 gap-x-8">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-primary-200">
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
                  className="mx-5 bg-primary-900" 
                  defaultValue={item?.quantity}
                  onChange={(e) => {
                    updateCart({
                      id: item.id,
                      data: { quantity: +e.target.value },
                    });
                  }}
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
                onCLick={() => {
                  deleteCart(item.id);
                }}
                className="!bg-transparent !w-fit !py-1 !px-2 shadow-none"
              />
            </div>
          </div>
        </li>
      ))}
      <div className="border-t border-primary-200 py-6">
        <div className="flex justify-between text-base ">
          <div>
            <p>Subtotal</p>
            <p>Total Items</p>
          </div>
          <div>
            <p> {subTotal} </p>
            <p> {totalItems} items </p>
          </div>
        </div>
        <p className="mt-0.5 text-sm ">
          Shipping and taxes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default Cart;
