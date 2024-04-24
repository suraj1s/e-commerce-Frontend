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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: cartData } = useGetcartsQuery({});
  const { data: paymentOptions } = useGetPaymentOptionQuery({});
  const { data: addressOptions } = useGetAddressQuery({});

  const [createPayment] = useCreatePaymentMutation();
  const [createCheckout] = useCreateCheckoutMutation();

  const [paymentOption, setPaymentOption] = useState("");
  const [addressOption, setAddressOption] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (paymentOptions?.results[0]?.id) {
      setPaymentOption(paymentOptions?.results[0]?.id);
    }
    if (addressOptions?.results[0]?.id) {
      setAddressOption(addressOptions?.results[0]?.id);
    }
  }, [paymentOptions, addressOptions]);

  useEffect(() => {
    console.log(cartData, "cartData");
    cartData?.results.length === 0 && router.push("/dashboard");
  }, [cartData]);

  const handelCheckout = async ({paymentMethod} : {paymentMethod : string})  => {
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
    if (!payment) return;
    if(paymentMethod === "cash"){
      const checkoutData = {
        address: addressOption,
        payment: payment?.data?.id,
        checkout_items: cartData?.results?.map((item: any) => item.id),
      };
      console.log(checkoutData, "checkoutData");
      const checkout = await mutationHandler(
        createCheckout,
        { data: checkoutData },
        () => {}
      );
      console.log(payment, checkout);
    } else {
      // handel khalti payment
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row space-x-10 space-y-8 pt-10  container  ">
        <div className="flex  flex-col gap-5 h-fit top-16">
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
        <div className="">
          <CheckoutCartDetail cartData={cartData} />
        </div>
      </div>

      <CustomButton
        title={
          paymentOption && paymentOptions?.results?.filter(item => item.id === paymentOption )[0].payment_method === "Khalti" ? "Pay With Khalti" : "Pay on Delivery"
        }
        className="!w-fit mx-auto my-10"
        onCLick={() => handelCheckout({paymentMethod : paymentOptions?.results?.filter(item => item.id === paymentOption )[0].payment_method ?? "cash"})}
      />
    </div>
  );
};

export default Page;
