"use client";
import CheckoutAddressDetail from "@/components/checkout/CheckoutAddressDetail";
import CheckoutCartDetail from "@/components/checkout/CheckoutCartDetail";
import CheckoutPaymentDetail from "@/components/checkout/CheckoutPaymentDetail";
import CustomButton from "@/components/common/custom/CustomButton";
import { useGetcartsQuery } from "@/redux/redux-slices/cart/cartApi";
import {
  useCreateCheckoutMutation,
  useCreatePaymentMutation,
  useGetAddressQuery,
  useGetPaymentOptionQuery,
} from "@/redux/redux-slices/checkout/checkoutApi";
import { mutationHandler } from "@/utils/mutationalHandler";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: cartData } = useGetcartsQuery({});
  const { data: paymentOptions } = useGetPaymentOptionQuery({});
  const { data: addressOptions } = useGetAddressQuery({});

  const [createPayment] = useCreatePaymentMutation();
  const [createCheckout] = useCreateCheckoutMutation();

  const [paymentOption, setPaymentOption] = useState("");
  const [addressOption, setAddressOption] = useState("");
  useEffect(() => {
    if (paymentOptions?.results[0]?.id) {
      setPaymentOption(paymentOptions?.results[0]?.id);
    }
    if (addressOptions?.results[0]?.id) {
      setAddressOption(addressOptions?.results[0]?.id);
    }
  }, [paymentOptions, addressOptions]);

  const handelCheckout = async () => {
    const paymentData = {
      payment_status: "pending",
      payment_reference: "pending",
      payment_method: paymentOption,
      payment_amount: cartData?.results?.reduce(
        (acc: number, item: any) => acc + item?.product?.price * item?.quantity,
        0
      ),
    };
    // console.log(paymentData, "paymentData");
    const payment = await mutationHandler(
      createPayment,
      { data: paymentData },
      () => {}
    );
    if(!payment) return;
    const checkoutData = {
      address: addressOption,
      payment: payment?.data?.id,
      items: cartData?.results?.map((item: any) => item.id),
    };
    console.log(checkoutData, "checkoutData")
    const checkout = await mutationHandler(
      createCheckout,
      { data: checkoutData },
      () => {}
    );
    console.log(payment, checkout);
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