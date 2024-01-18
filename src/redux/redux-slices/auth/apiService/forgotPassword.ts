import { apiSlice } from "@/redux/redux-store/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPasswordRequest: builder.mutation({
      query: (forgotPassword : {email : string} ) => ({
        url: `auth/forgot-password-request/`,
        method: "POST",
        forgotPassword 
      }),
      invalidatesTags: ["authUser"]
    }),   
    resetPassword: builder.mutation({
      query: (resetPassword : ResetPasswordType ) => ({
        url: `auth/reset-password/`,
        method: "POST",
        resetPassword 
      }),
      invalidatesTags: ["authUser"]
    }), 
  })
})

export const {
  useForgotPasswordRequestMutation,
  useResetPasswordMutation,
} = authApiSlice
