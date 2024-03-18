"use client"
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Logo } from "@/assets/images";
import CustomInput, { inputField } from "@/components/common/custom/CustomInput";
import { useCheckUserMutation } from "@/redux/redux-slices/auth/apiService/auth";
import { toaster } from "@/components/common/custom/Toaster";
import CustomButton from "@/components/common/custom/CustomButton";
import Link from "next/link";

const inputTypeDetails : inputField[] = [
  {
    title: "Email",
    name: "email",
    placeholder: "Enter your email address ",
    // icon: <Status />,
    type: "text",
    validation:{ required : " plese enter a valid email " , pattern : { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi , 
    message: "plese enter a valid email "
  }}
  },

]

const SignUp = () => {  
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
      <div className="container "> 
      <div className="py-12 text-primary-800  ">
        <div>
          <Image
            className="mx-auto h-20 w-20"
            src={Logo}
            alt="MERN E-commerce"
          />
          <h2 className="mt-10 text-center text-2xl font-bold  ">
            Enter your email to forget password
          </h2>
        </div>
        <div className="mt-5 ">
           <form
      onSubmit={handleSubmit(onsubmitHandler)}
      className="space-y-3 max-w-sm mx-auto "
    >
      <div className="flex flex-col  gap-y-5 ">

              <CustomInput
                errors={errors}
                inputfield={inputTypeDetails[0]}
                register={register}
              />
 
             <CustomButton title="forget password" type="submit" />
             <div className="flex gap-x-2 items-center">
              <p>Remember password?</p>
              <Link href={"/auth/signin"} ><p className="text-primary-500  text-sm font-semibold"> Sign In </p> </Link>
             </div>
            </div>
       
    </form>
        </div>
     
      </div>
    </div>
  );
};

export default SignUp;
