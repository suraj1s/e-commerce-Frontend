import { apiSlice } from "@/redux/redux-store/apiSlice"

export const checkoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({  

    createPayment: builder.mutation({
      query: ({data}: {data : ICreatePayment}) => ({
        url: `payment/create/`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["payment"]
    }),
      getCheckout: builder.query({
        query: () => ({
          url: `checkout/`,
          method: "GET"
        }),
        providesTags: ["checkout"]
      }),
      
      createCheckout: builder.mutation({
        query: ({data}: {data : ICreateCheckout}) => ({
          url: `checkout/create/`,
          method: "POST",
          body: data
        }),
        invalidatesTags: ["checkout" , "cart"]
      }),

      updateCheckout: builder.mutation({
        query: ({ id , data}) => ({
          url: `checkout/${id}/update/`,
          method: "PATCH",
          body: data
        }),
        invalidatesTags: ["checkout"]
      }),

      getAddress: builder.query<IGetAllAddress , any>({
        query: () => ({
          url: `checkout/address/`,
          method: "GET"
        }),
        providesTags: ["address"]
      }),

      createAddress: builder.mutation({
        query: (data) => ({
          url: `checkout/address/create/`,
          method: "POST",
          body: data
        }),
        invalidatesTags: ["address"]
      }),

      updateAddress: builder.mutation< IGetAddress , any>({
        query: ({ id , data}) => ({
          url: `checkout/address/${id}/update/`,
          method: "PATCH",
          body: data
        }),
        invalidatesTags: ["address"]
      }),

      deleteAddress: builder.mutation({
        query: (id) => ({
          url: `checkout/address/${id}/delete/`,
          method: "DELETE"
        }),
        invalidatesTags: ["address"]
      }),

      getPaymentOption: builder.query<IPaymentOption , any>({
        query: () => ({
          url: `payment/payment_options/`,
          method: "GET"
        }),
        providesTags: ["paymentOptions"]
      }),
  })
})

export const {
    useCreateCheckoutMutation,
    useGetCheckoutQuery,
    useUpdateCheckoutMutation,
    useCreateAddressMutation,
    useGetAddressQuery,
    useDeleteAddressMutation,
    useUpdateAddressMutation,
    useGetPaymentOptionQuery,
    useCreatePaymentMutation,
  
} = checkoutApiSlice
