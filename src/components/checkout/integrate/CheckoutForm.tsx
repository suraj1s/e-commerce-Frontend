"use client";
import { EMAIL_REGEX, NUMBER_REGEX } from "@/components/common/constants";
import CommonPopup from "@/components/common/custom/CommonPopup";
import CustomButton from "@/components/common/custom/CustomButton";
import CustomDropDown from "@/components/common/custom/CustomDropDown";
import CustomInput from "@/components/common/custom/CustomInput";
import { useCreateAddressMutation } from "@/redux/redux-slices/checkout/checkoutApi";
import { mutationHandler } from "@/utils/mutationalHandler";
import React from "react";
import { useForm } from "react-hook-form";

interface CheckoutFormProps {
    closeModal: () => void;
}

const CheckoutForm = ({closeModal} : CheckoutFormProps) => {
  const inputfieldDetails: inputField[] = [
    {
      title: "Full Name",
      name: "full_name",
      placeholder: "Enter your full name",
      type: "text",
      className: "col-span-2",
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your full name",
        },
      },
    },

    {
      title: "Email",
      name: "email",
      placeholder: "Enter your email",
      type: "text",
      className: "col-span-2 ",
      validation: {
        required: {
          value: true,
          RegExp: EMAIL_REGEX,
          message: "Opps! Enter your email",
        },
      },
    },
    {
      title: "Phone",
      name: "phone",
      placeholder: "Enter your phone",
      type: "number",
      className: "col-span-2",
      validation: {
        required: {
          value: true,
          RegExp: NUMBER_REGEX,
          message: "Opps! Enter your phone",
        },
      },
    },

    {
      title: "Country",
      name: "country",
      placeholder: "Enter your Country",
      type: "text",
      className: "col-span-2 xl:col-span-1",
      options: [
        {
          value: "english-US",
          name: "English - United States",
          icon: (
            // eslint-disable-next-line
            <img
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
              alt=""
              className="h-[20px] w-[20px] rounded-full object-cover"
            />
          ),
        },
        {
          value: "English-UK",
          name: "English - United Kingdom",
          icon: (
            // eslint-disable-next-line
            <img
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
              alt=""
              className="h-[20px] w-[20px] rounded-full object-cover"
            />
          ),
        },
      ],
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your Country",
        },
      },
    },

    {
      title: "State",
      name: "state",
      placeholder: "Enter your state",
      type: "text",
      className: "col-span-2 xl:col-span-1",
      options: [
        {
          value: "english-US",
          name: "English - United States",
          icon: (
            // eslint-disable-next-line
            <img
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
              alt=""
              className="h-[20px] w-[20px] rounded-full object-cover"
            />
          ),
        },
        {
          value: "English-UK",
          name: "English - United Kingdom",
          icon: (
            // eslint-disable-next-line
            <img
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
              alt=""
              className="h-[20px] w-[20px] rounded-full object-cover"
            />
          ),
        },
      ],
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your state",
        },
      },
    },
    {
      title: "City",
      name: "city",
      placeholder: "Enter your city",
      type: "text",
      className: "col-span-2 xl:col-span-1",
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your city",
        },
      },
    },
    {
      title: "Postal code",
      name: "postal_code",
      placeholder: "Enter your postalcode",
      type: "text",
      className: "col-span-2 xl:col-span-1",
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your postalcode",
        },
      },
    },
    {
      title: "Street Address",
      name: "street_address",
      placeholder: "Enter your Street Address",
      type: "text",
      className: "col-span-2",
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your Street Address",
        },
      },
    },
  ];
  const [createAddress] = useCreateAddressMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    mutationHandler(
      createAddress,
      data,
      ()=> {
        closeModal();
        reset();
      }
    )
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full max-w-[655px] grid-cols-2 gap-[15px] relative  z-20"
    >
      <div className=" col-span-2 w-full overflow-y-scroll px-6">

      {inputfieldDetails?.map((item, index) =>
        item?.options ? (
          <div key={index} className={`${item?.className} w-full space-y-[6px]`}>
            <span className={` text-sm font-medium `}>
              {item?.name}
              {item?.validation?.required && (
                <span className="text-red-600">*</span>
              )}
            </span>
            <CustomDropDown
              inputfield={item}
              errors={errors}
              register={register}
            />
          </div>
        ) : (
          <div className={`${item?.className}`} key={index}>
            <CustomInput
              inputfield={item}
              errors={errors}
              register={register}
            />
          </div>
        )
      )}
      </div>

      <div className="col-span-2 my-2 flex items-center justify-end gap-3">
        <CustomButton
          onCLick={() => {
            closeModal();
            reset();
          }}
          className="!w-fit"
          title="Cancel"
        />
        <CustomButton className="!w-fit" title="Confirm" type="submit" />
      </div>
    </form>
  );
};

export default CheckoutForm;
