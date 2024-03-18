const CheckoutPaymentDetail = ({
  setPaymentoption,
  paymentOption,
  paymentOptions,
}: any) => {
  return (
    <div className="flex flex-col space-y-5">
    <p>Plese Choose a Payment Option </p>
    <div className=" flex flex-wrap gap-5 ">

      {paymentOptions?.results?.map((item: any) => (
        <div
          key={item.id}
          className={` flex gap-4 border rounded-md p-3 cursor-pointer ${
            paymentOption ? paymentOption === item.id && "!bg-primary-800"
            : paymentOptions?.results[0]?.id === item.id && "!bg-primary-800"
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
    </div>
  );
};

export default CheckoutPaymentDetail;
