import { AlertErrorIcon, AlertSuccessIcon } from "@/assets/icons"
import React from "react"
import toast from "react-hot-toast"

export const toaster = (type: any, message: any) => {
  switch (type) {
    case "error":
      toast.custom((t: any) => (
        <div className=" flex h-16 w-fit justify-center md:justify-end ">
          <div
            className={`  pointer-events-auto    w-[500px] bg-red-600 rounded-md  px-2 text-white shadow ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex justify-between ">
              <div className="flex items-start">
                <div className="flex flex-col gap-1 p-2 ">
                  <p className="flex items-center gap-2  text-base  font-semibold">
                    <AlertErrorIcon />
                    Error
                  </p>
                  <div className="flex items-center gap-2 text-xl">
                    <p className=" text-sm font-medium  text-white ">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="mt-2">
                <CloseIcon
                  onClick={() => toast.dismiss(t.id)}
                  className="h-5 w-5 cursor-pointer !text-white"
                />
              </div> */}
            </div>
          </div>
        </div>
      ))
      break

    case "success":
      toast.custom((t: any) => (
        <div className="custom-toast flex h-16 w-fit justify-center md:justify-end  ">
          <div
            className={`pointer-events-auto w-[500px] !border-l-4 !border-alert-success rounded-md  bg-green-600 px-2   !text-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex flex-col gap-1 p-2 ">
                  <p className="flex items-center gap-2  text-base font-semibold">
                    <AlertSuccessIcon /> Success
                  </p>
                  <div className="flex items-center gap-2 text-xl">
                    <p className=" text-sm font-medium   text-white ">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="mt-2">
                <CloseIcon
                  onClick={() => toast.dismiss(t.id)}
                  className="h-5 w-5 cursor-pointer !text-black"
                />
              </div> */}
            </div>
          </div>
        </div>
      ))
      break

    default:
  }
}
