import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react"
// import Cookies from "js-cookie"
const Cookies = require("js-cookie")


// export const backendurl = process.env.BACKEND_URL || "https://dummyjson.com/"
export const backendurl = process.env.BACKEND_URL || "http://localhost:8000/api/v1/"
const  access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzU1MDI4LCJpYXQiOjE3MDc5MjMwMjgsImp0aSI6IjBhZWNmN2I3NTUzMDRkZGU4MzI4ZDRhMWUxMjQ4YmQzIiwidXNlcl9pZCI6IjFlNjU1NTQzLWM0M2YtNDNjOC1hNmRmLWQ1NTRhNDgzMWU3YyJ9.oXhPNNUWSlIATYwZxPk15J4CzRz-95lbaCCm5Pzgb9E'
const refresh_token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwODc4NzAyOCwiaWF0IjoxNzA3OTIzMDI4LCJqdGkiOiIxYjZkYmEyNGMzMDE0OWY3OGNlM2U1Njc4Nzk5MGZlZSIsInVzZXJfaWQiOiIxZTY1NTU0My1jNDNmLTQzYzgtYTZkZi1kNTU0YTQ4MzFlN2MifQ.iWnqrhDIu54MgB2eiQDdgkf2ubnCeEXYnKotKvfoMn0'
Cookies.set("access_token" , access_token)
Cookies.set("refresh_token" , refresh_token)
const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
  // here we are preparing the headers that need to be sent with each request
  prepareHeaders : (headers ) => {
    const access_token = Cookies.get("access_token")
    if(access_token) {
      headers.set("Authorization", `Bearer ${access_token}`)
    }
    return headers
  }
})
const baseQueryWithReauth = async (
  args : string | FetchArgs , 
  api : BaseQueryApi ,
  extraOptions : {},
) => {
const result = await baseQuery(args, api, extraOptions);
// if the auth token is expired, we will try to refresh it using the refress token and then set it in headers and send the request again
if(result.error && result.error.status === 401) {
  const refresh_token = Cookies.get("refresh_token")
  if(refresh_token) {
    const refreshResult : any = await baseQuery( 
       {
      url : "auth/token/refresh/",
      method: "POST",
      body: {refresh: refresh_token}
    },
    api , 
    extraOptions
    )
    console.log(refreshResult , "refreshResult")
    if(refreshResult.data) {
      Cookies.set("access_token", refreshResult.data.access)
      const result =  baseQuery(args, api, extraOptions);
      return result
    }
    else {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
    }
  }
}
return result
}
 export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery : baseQueryWithReauth,
  tagTypes: [
    "authUser",
    "forgotPassword",
    "product",
    "productDetail",
    "cart",
    "checkout",
    "address",
  ],
  endpoints: (builder) => ({})
})
