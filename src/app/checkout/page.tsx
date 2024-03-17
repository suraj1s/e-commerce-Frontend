"use client";
import CheckoutAddressDetail from "@/components/checkout/CheckoutAddressDetail";
import CheckoutCartDetail from "@/components/checkout/CheckoutCartDetail";
import CheckoutPaymentDetail from "@/components/checkout/CheckoutPaymentDetail";
import CustomButton from "@/components/common/custom/CustomButton";
import { useGetcartsQuery } from "@/redux/redux-slices/cart/cartApi";
import { useGetAddressQuery, useGetPaymentOptionQuery } from "@/redux/redux-slices/checkout/checkoutApi";
import React, { useState } from "react";

const Page = () => {
  const { data: cartData } = useGetcartsQuery({});
  const { data: paymentOptions } = useGetPaymentOptionQuery({});
  const { data: addressOptions } = useGetAddressQuery({});


  const [paymentOption, setPaymentOption] = useState(paymentOptions?.results[0]?.id);
  const [addressOption, setAddressOption] = useState(addressOptions?.results[0]?.id);
  const handelCheckout = () => {
    console.log(  paymentOption ," | " , addressOption , "checkout data")
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row space-x-10 space-y-8 pt-10  container justify-center ">
        <div className="flex flex-col gap-5 h-fit lg:sticky top-16">
          <CheckoutAddressDetail 
          setAddressOption={setAddressOption}
          addressOption={addressOption}
          addressOptions={addressOptions}
          />
          <CheckoutPaymentDetail
            setPaymentoption={setPaymentOption}
            paymentOption={paymentOption}
            paymentOptions={paymentOptions}
          />
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
