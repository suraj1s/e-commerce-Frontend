import { apiSlice } from "@/redux/redux-store/apiSlice"

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({  
      getcarts: builder.query({
        query: () => ({
          url: 'cart/',
          method: "GET"
        }),
        providesTags: ["cart"]
      }),
      
      createCart: builder.mutation({
        query: (data) => ({
          url: `cart/create/`,
          method: "POST",
          body: data
        }),
        invalidatesTags: ["cart"]
      }),

      updateCart: builder.mutation({
        query: ({ id , data}) => ({
          url: `cart/${id}/update/`,
          method: "PATCH",
          body: data
        }),
        invalidatesTags: ["cart"]
      }),

      deleteCart: builder.mutation({
        query: (id) => ({
          url: `cart/${id}/delete/`,
          method: "DELETE"
        }),
        invalidatesTags: ["cart"]
      })
  })
})

export const {
    useUpdateCartMutation,
    useGetcartsQuery,
    useCreateCartMutation,
    useDeleteCartMutation,
  
} = cartApiSlice
