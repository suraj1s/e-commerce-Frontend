import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

// export const backendurl = process.env.BACKEND_URL || "https://dummyjson.com/"
export const backendurl = process.env.BACKEND_URL || "http://localhost:8000/api/v1/"
// const backendurl = "http://192.168.1.131:8000/"

const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
})
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery,
  tagTypes: [
    "authUser",
    "forgotPassword",
    "product",
    "productDetail",
  ],
  endpoints: (builder) => ({})
})
