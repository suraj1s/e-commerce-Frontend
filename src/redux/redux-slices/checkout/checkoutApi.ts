import { apiSlice } from "@/redux/redux-store/apiSlice"

export const checkoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({  
      getCheckout: builder.query({
        query: () => ({
          url: `cart/`,
          method: "GET"
        }),
        providesTags: ["checkout"]
      }),
      
      createCheckout: builder.mutation({
        query: (data) => ({
          url: `cart/create/`,
          method: "POST",
          body: data
        }),
        invalidatesTags: ["checkout"]
      }),

      updateCheckout: builder.mutation({
        query: ({ id , data}) => ({
          url: `cart/${id}/update/`,
          method: "PATCH",
          body: data
        }),
        invalidatesTags: ["checkout"]
      }),

      getAddress: builder.query({
        query: () => ({
          url: `address/`,
          method: "GET"
        }),
        providesTags: ["address"]
      }),

      createAddress: builder.mutation({
        query: (data) => ({
          url: `address/create/`,
          method: "POST",
          body: data
        }),
        invalidatesTags: ["address"]
      }),

      updateAddress: builder.mutation({
        query: ({ id , data}) => ({
          url: `address/${id}/update/`,
          method: "PATCH",
          body: data
        }),
        invalidatesTags: ["address"]
      }),

      deleteAddress: builder.mutation({
        query: (id) => ({
          url: `address/${id}/delete/`,
          method: "DELETE"
        }),
        invalidatesTags: ["address"]
      }),
  })
})

export const {
    useCreateCheckoutMutation,
    useGetCheckoutQuery,
    useUpdateCheckoutMutation,
  
} = checkoutApiSlice
