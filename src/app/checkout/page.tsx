"use client";
import CheckoutAddressDetail from "@/components/checkout/CheckoutAddressDetail";
import CheckoutCartDetail from "@/components/checkout/CheckoutCartDetail";
import CheckoutPaymentDetail from "@/components/checkout/CheckoutPaymentDetail";
import CustomButton from "@/components/common/custom/CustomButton";
import { useGetcartsQuery } from "@/redux/redux-slices/cart/cartApi";
import React from "react";

const Page = () => {
  const { data: cartData } = useGetcartsQuery({});

  const handelCheckout = () => {
    console.log("order placed");
  };

  
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row space-x-10 space-y-8 pt-10  container justify-center ">
        <div className="flex flex-col gap-5 h-fit lg:sticky top-28">
          <CheckoutAddressDetail />
          <CheckoutPaymentDetail />
        </div>
        <div>
          <CheckoutCartDetail cartData={cartData} />
        </div>
      </div>

      <CustomButton
        title="Place Order"
        className="!w-fit mx-auto my-10"
        onCLick={handelCheckout}
      />
    </div>
  );
};

export default Page;
