"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Logo } from "@/assets/images";
import CustomInput from "@/components/common/custom/CustomInput";
import { useCheckUserMutation } from "@/redux/redux-slices/auth/apiService/auth";
import CustomButton from "@/components/common/custom/CustomButton";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PASSWORD_REGEX } from "@/components/common/constants";
const Cookies = require("js-cookie");
const inputTypeDetails: inputField[] = [
  {
    title: "Username",
    name: "username",
    placeholder: "Enter your Username address ",
    // icon: <Status />,
    type: "text",
    validation: {
      required: " plese enter a valid Username ",
    },
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Enter your password",

    // icon: <Status />,
    type: "text",
    validation: {
      required: " plese enter a valid password ",
      pattern: {
        value: PASSWORD_REGEX,
        message: `- at least 8 characters \n
    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
    - Can contain special characters`,
      },
    },
  },
];

const SignIn = () => {
  const [checkUser, { isError, isLoading, isSuccess }] = useCheckUserMutation();
  const router = useRouter();
  const onsubmitHandler = async (data: any) => {
    console.log(data , "data")
    try {
      const response: any = await checkUser(data);
      if (response?.error) {
        toast.error("errors", response?.error?.data?.errors[0]?.detail);
      } else {
        console.log(response, "response");
        Cookies.set("access_token", response?.data?.access_token);
        Cookies.set("refresh_token", response?.data?.refresh_token);
        toast.success(" user loggned successfully");
        router.push("/");
      }
    } catch (error: any) {
      toast.error("error", error?.data?.message ?? "Something went wrong");
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
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
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 ">
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
              <div>
                <CustomInput
                  errors={errors}
                  inputfield={inputTypeDetails[1]}
                  register={register}
                />
                <Link href={"/auth/forget-password"}>
                  <p className="text-sm font-medium text-right text-primary-500 hover:text-primary-700 pt-2">
                    Forget your password?
                  </p>
                </Link>
              </div>
              <CustomButton title="sign in" type="submit" />
              <div className="flex gap-x-2 items-center">
                <p>Don&lsquo;t have account </p>
                <Link href={"/auth/signup"}>
                  <p className="text-primary-500  text-sm font-semibold">
                    {" "}
                    Sign Up{" "}
                  </p>{" "}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
