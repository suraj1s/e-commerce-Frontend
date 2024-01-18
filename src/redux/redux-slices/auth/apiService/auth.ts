import { apiSlice } from "@/redux/redux-store/apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // example: builder.query({
    //   query: ({ search="", limit="", offset="", branch="" }) => ({
    //     url: `eg/categories/?search=${search}&limit=${limit}&offset=${offset}&branch=${branch}`,
    //     method: "GET"
    //   }),
    //   providesTags: ["authUser"]
    // }),
    createUser: builder.mutation({
      query: (signInData : SignInDataType ) => ({
        url: `auth/signup`,
        method: "POST",
        signInData 
      }),
      invalidatesTags: ["authUser"]
    }),   
    checkUser: builder.mutation({
      query: (signInData : SignInDataType ) => ({
        url: `auth/login`,
        method: "POST",
        signInData 
      }),
      invalidatesTags: ["authUser"]
    }), 
    checkAuthToken: builder.query({
        query: () => ({
          url: `auth/login`,
          method: "GET"
        }),
        providesTags: ["authUser"]
      }),  
    signOut: builder.query({
        query: () => ({
          url: `auth/logout`,
          method: "GET"
        }),
        providesTags: ["authUser"]
    }),  
  })
})

export const {
  useCreateUserMutation,
  useCheckUserMutation,
  useCheckAuthTokenQuery,
  useSignOutQuery,
} = authApiSlice
