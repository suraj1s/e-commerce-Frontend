"use client";

import { useGetOrdersQuery } from "@/redux/redux-slices/orders/orderApi";
import Image from "next/image";
import React from "react";

const ReturnAndOrder = () => {
  const { data: orderData, isLoading } = useGetOrdersQuery({});
  
  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading && <div>Loading...</div>}
      {orderData?.results?.map((order) => (
        <div key={order.id} className="border rounded-md shadow-md p-4 my-4">
          <h1 className="text-xl font-semibold mb-2">Order Id : {order.id}</h1>
          <h1 className="text-lg font-semibold text-blue-500 mb-2">Order Status : {order.order_status}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {order.order_detail.checkout_items.map((item) => (
              <div key={item.id} className="border p-4 rounded-md flex flex-wrap gap-5 items-center">
                <div className="flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={item.product.thumbnail} width={200} height={200} alt={item.product.title} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.product.title}</h2>
                  <p >${item.product.price.toFixed(2)}</p>
                  <p >Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReturnAndOrder;
