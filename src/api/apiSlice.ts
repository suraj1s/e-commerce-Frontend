// import Cookies from "js-cookie"
// import { toaster } from "@/components/common/custom/Toaster"

import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

export const backendurl = process.env.BACKEND_URL || "http://127.0.0.1:8000/"
// const backendurl = "http://192.168.1.131:8000/"

const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
  // credentials: "include",
//   prepareHeaders: (headers, { getState }) => {
//     const access_token = Cookies.get("access")
//     if (access_token) {
//       headers.set("authorization", `Bearer ${access_token}`)
//     }
//     return headers
//   }
})

// const baseQueryWithReauth = async (
//   args: string | FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: {}
// ) => {
//   const result = await baseQuery(args, api, extraOptions)
//   if (result.error?.status === "FETCH_ERROR") {
//     toaster("error", "Internal Server Error")
//   }
//   if (result.error?.status === 401) {
//     const refresh_token = Cookies.get("refresh")
//     if (refresh_token) {
//       console.log(refresh_token, "refresh_token")
//       const refreshResult: any = await baseQuery(
//         {
//           url: `${backendurl}authuser/login/refresh/`,
//           method: "POST",
//           body: { refresh: Cookies.get("refresh") }
//         },
//         api,
//         extraOptions
//       )
//       console.log(refreshResult, "refreshResult")
//       if (refreshResult) {
//         if (refreshResult?.error) {
//           Cookies.remove("access")
//           Cookies.remove("refresh")
//           //dispatch(logout())
//         } else {
//           Cookies.set("access", refreshResult.data.access)
//           const retryResult = await baseQuery(args, api, extraOptions)
//           return retryResult
//         }
//       } else {
//         Cookies.remove("access")
//         Cookies.remove("refresh")
//         //dispatch(logout())
//       }
//     } else {
//       Cookies.remove("access")
//       Cookies.remove("refresh")
//       //dispatch(logout())
//     }
//   }
//   return result
// }

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    "authUser"
  ],
  endpoints: (builder) => ({})
})
