"use client";
import React, { useEffect, useState } from "react";
interface IPageProps {
  searchParams: {
    pidx: string;
    transaction_id: string;
    tidx: string;
    amount: string;
    total_amount: string;
    mobile: string;
    status: string;
    purchase_order_id: string;
    purchase_order_name: string;
  };
}

interface IPayVarifyBackedn {
  message: string;
  data: {
    pidx: string;
    amount: string;
    mobile: string;
    status: string;
  };
  parsedLookupBody: {
    pidx: string;
    total_amount: number;
    status: string;
    transaction_id: string;
    fee: number;
    refunded: boolean;
  };
}

const Page = ({ searchParams }: IPageProps) => {
  console.log(searchParams);
  const [payVarifyBackedn, setPayVarifyBackedn] = useState<IPayVarifyBackedn>();
  useEffect(() => {
    if (searchParams.pidx) {
      fetch(
        `/api/khalti/success?pidx=${searchParams.pidx}&amount=${searchParams.amount}&mobile=${searchParams.mobile}&status=${searchParams.status}`
      )
        .then((response) => response.json())
        .then((data: any) => {
          setPayVarifyBackedn(data);
          console.log(data, "from client");
        });
    }
  }, [searchParams]);
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 py-5 px-20 ">
        <p className="text-4xl"> Khalti response </p>
        {Object.keys(searchParams).map((key, index): any => {
          return (
            <div key={index}>
              <span>{key} : </span>
              {/* @ts-ignore */}
              <span>{searchParams[key]}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-5 py-5 px-20 ">
        <p className="text-4xl"> Backend response </p>
        <div>
          <p>parsedLookupBody</p>
          <div>
            {payVarifyBackedn?.parsedLookupBody &&
              Object.keys(payVarifyBackedn.parsedLookupBody).map(
                (key, index): any => {
                  return (
                    <div key={index}>
                      <span>{key} : </span>
                      {/* @ts-ignore */}
                      <span>{payVarifyBackedn.parsedLookupBody[key]}</span>
                    </div>
                  );
                }
              )}
          </div>
        </div>
        <div>
          <p>Backend data</p>
          <div>
            {payVarifyBackedn?.data &&
              Object.keys(payVarifyBackedn.data).map((key, index): any => {
                return (
                  <div key={index}>
                    <span>{key} : </span>
                    {/* @ts-ignore */}
                    <span>{payVarifyBackedn.data[key]}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
