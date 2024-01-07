import { apiSlice } from "@/api/apiSlice"

export const productApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({  
    getProducts: builder.query({
        query: () => ({
          url: `products`,
          method: "GET"
        }),
        providesTags: ["product"]
      }), 
      
      
    getProduct: builder.query({
        query: (id : number) => ({
          url: `products/${id}}`,
          method: "GET"
        }),
        providesTags: ["product"]
    }),  
  })
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
} = productApiSlice
