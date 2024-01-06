import { apiSlice } from "@/api/apiSlice"

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // example: builder.query({
    //   query: ({ search="", limit="", offset="", branch="" }) => ({
    //     url: `eg/categories/?search=${search}&limit=${limit}&offset=${offset}&branch=${branch}`,
    //     method: "GET"
    //   }),
    //   providesTags: ["productUser"]
    // }),

    // createProduct: builder.mutation({
    //   query: (signInData : SignInDataType ) => ({
    //     url: `product/signup`,
    //     method: "POST",
    //     signInData 
    //   }),
    //   invalidatesTags: ["product"]
    // }),   
    
    getProducts: builder.query({
        query: () => ({
          url: `products`,
          method: "GET"
        }),
        providesTags: ["product"]
      }),  
    getProduct: builder.query({
        query: (id : number) => ({
          url: `products/1`,
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
