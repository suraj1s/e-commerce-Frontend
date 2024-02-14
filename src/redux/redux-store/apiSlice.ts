import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"


// export const backendurl = process.env.BACKEND_URL || "https://dummyjson.com/"
export const backendurl = process.env.BACKEND_URL || "http://localhost:8000/api/v1/"
// const  access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3OTMyODI0LCJpYXQiOjE3MDc1MDA4MjQsImp0aSI6ImQzZTFjMDZhYTE3NTQ4ZTFhZGNlNmZkODQzODA3ZTI5IiwidXNlcl9pZCI6IjFlNjU1NTQzLWM0M2YtNDNjOC1hNmRmLWQ1NTRhNDgzMWU3YyJ9.ep4ozMWaGWin3v6aA2cAam5CgO4DFPBmruo8JIk5Vnk'
// const refresh_token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwODM2NDgyNCwiaWF0IjoxNzA3NTAwODI0LCJqdGkiOiIzOWYxYmVhNjZiM2Y0NjU4ODkzNzM5MDVkYWI3ZGFmNyIsInVzZXJfaWQiOiIxZTY1NTU0My1jNDNmLTQzYzgtYTZkZi1kNTU0YTQ4MzFlN2MifQ.uPLLvGwtJR4cwmQVNswtwzLls5wN4IRid48StfJ1xo0'
// Cookies.set("access_token" , access_token)
// Cookies.set("refresh_token" , refresh_token)
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
  ],
  endpoints: (builder) => ({})
})
