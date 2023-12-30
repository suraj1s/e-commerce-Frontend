import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

export const backendurl = process.env.BACKEND_URL || "http://127.0.0.1:8000/"
// const backendurl = "http://192.168.1.131:8000/"

const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
})
export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    "authUser",
    "forgotPassword",
  ],
  endpoints: (builder) => ({})
})
