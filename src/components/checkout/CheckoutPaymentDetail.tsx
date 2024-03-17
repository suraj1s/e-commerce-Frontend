const CheckoutPaymentDetail = ({
  setPaymentoption,
  paymentOption,
  paymentOptions,
}: any) => {
  return (
    <div className=" flex flex-wrap gap-5 ">
      {paymentOptions?.results?.map((item: any) => (
        <div
          key={item.id}
          className={` flex gap-4 border rounded-md p-3 cursor-pointer ${
            paymentOption ? paymentOption === item.id && "!bg-slate-300"
            : paymentOptions?.results[0]?.id === item.id && "!bg-slate-300"
          }   `}
        >
          <input
            type="radio"
            name="paymentoption"
            id={item.id}
            onChange={() => {
              setPaymentoption(item.id);
            }}
            // checked = {paymentOption === item.id}
            defaultChecked={paymentOptions?.results[0]?.id === item.id}            
            className="cursor-pointer "
          />
          <label htmlFor={item.id}>
            <img
              src={item?.payment_image}
              alt={item.payment_method}
              className="h-10 cursor-pointer"
            />

            <p className="cursor-pointer">{item.payment_method}</p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPaymentDetail;
