"use client"
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Logo } from "@/assets/images";
import CustomInput, { inputField } from "@/components/common/custom/CustomInput";
import { useCheckUserMutation } from "@/redux/redux-slices/auth/apiService/auth";
import { toaster } from "@/components/common/custom/Toaster";

const inputTypeDetails : inputField[] = [
  {
    title: "Email",
    name: "email",
    placeholder: "Enter your email address ",
    // icon: <Status />,
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your email is not valid"
      }
    }
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Enter your password",
    // icon: <Status />,
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Opps! Enter your password is not valid"
      }
    }
  }
]

const SignIn = () => {
    
  const [checkUser , { isError , isLoading , isSuccess }] = useCheckUserMutation();
  const onsubmitHandler = async (data: any) => {
      // const formData = new FormData()
      // formData.append("name", data.name)
      // formData.append("status", selectionValue.value)
      // formData.append("branch", branch)
  
      
        try {
          const response: any = await checkUser(data)
          if (response?.error) {
            toaster("error", response?.error?.data?.errors[0]?.detail)
          } else {
            toaster("success", "Category Updated Successfully")
          }
        } catch (error: any) {
          toaster("error", error?.data?.message ?? "Something went wrong")
        }
    }
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors }
    } = useForm()
  return (
      <div>
        {/* {user && <Navigate to='/' replace={true} /> }  */}
      <div className="flex  flex-col justify-center py-12 ">
        <div>
          <Image
            className="mx-auto h-20 w-20"
            src={Logo}
            alt="MERN E-commerce"
          />
          <h2 className="mt-10 text-center text-2xl font-bold text-gray-900 ">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10">
           <form
      onSubmit={handleSubmit(onsubmitHandler)}
      className=" modal-height space-y-3 overflow-y-auto px-2 "
    >
      <CustomInput
        errors={errors}
        inputfield={inputTypeDetails[0]}
        register={register}
      />
      </form>
        </div>
     
      </div>
    </div>
  );
};

export default SignIn;
