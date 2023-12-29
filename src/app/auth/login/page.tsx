import  { useState } from "react";
import { useForm } from "react-hook-form";
import { checkUserAsync, selectIsLoading, selectLoggedInUser, selecterror } from "@/components/auth/feature/authSlice";
import { useDispatch , useSelector} from "react-redux";
import logo from '../../../assets/logo.png';
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface loginDataType {
    email: string;
    password: string;
}

const SignIn = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectLoggedInUser)
    const error = useSelector(selecterror)
    const loading = useSelector(selectIsLoading);
    const [userRole, setUserRole] = useState("")

    const handelDemoLogin = ({email  , password } : { email : string , password : string  } ) => {
    //   dispatch(checkUserAsync({email , password }))
    //   setUserRole(role);
    }
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
  return (
      <div>
        {/* {user && <Navigate to='/' replace={true} /> }  */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="MERN E-commerce"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form noValidate className="space-y-6"onSubmit={ handleSubmit((data ) =>
        //  dispatch(checkUserAsync({email:data.email , password : data.password}))
         console.log(data)
  )}>  
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-300"
              >
                Email address
              </label>
              <div className="mt-2">
                <input 
                  id="email"
                  {...register("email" ,  { required : " plese enter a valid email " , pattern : { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi , 
                  message: "plese enter a valid email "
                }})}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-300"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                   href={'/forgotPassword'}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password")}
                  type="password" 
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {/* {error && <p className="text-red-500">{error.message }</p>} */}
              {/* {user && <p className="text-green-500">successfull...</p>} */}

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
            <h3 className="my-5">Demo login </h3>
          <div className="flex space-x-10">
            <button onClick={()=>handelDemoLogin({email:'user@gmail.com' , password : 'User1234' })} className="flex w-fit justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">User
            {
             loading === "loading" && userRole === "user" && (
              <Loader2 className="h-4 w-4 text-white animate-spin mt-1 ml-2"/>
             )
            }
            
            </button>
            <button onClick={()=>handelDemoLogin({email:'admin@gmail.com' , password : 'Admin1234' })} className="flex w-fit justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Admin
            {
             loading === "loading" &&  userRole === "admin" &&  (
              <Loader2 className="h-4 w-4 text-white animate-spin mt-1 ml-2"/>
             )
            }
            </button>
           
          </div>

          <p className="mt-10 mx-2 text-center text-sm text-gray-500  dark:text-gray-300">
            Dont have account ?
            <Link
              href="/SignUp"
              className=" mx-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              SignUp
            </Link>
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default SignIn;
