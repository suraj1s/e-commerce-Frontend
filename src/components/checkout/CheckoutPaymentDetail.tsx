"use client";
import { useGetPaymentOptionQuery } from "@/redux/redux-slices/checkout/checkoutApi";

const CheckoutPaymentDetail = () => {
  // const { data: paymentOptions } = useGetPaymentOptionQuery({});
  const { data: paymentOptions } = useGetPaymentOptionQuery({});

  return (
    <div className=" flex flex-wrap gap-5 ">
      {paymentOptions?.results?.map((item) => (
        <div key={item.id} className="flex gap-4 border rounded-md p-3">
          <input type="radio" name="paymentoption" id={item.id} />
          <img src={item?.payment_image} alt={item.payment_method} className="h-10" />
          <label htmlFor={item.id}>{item.payment_method}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPaymentDetail;
