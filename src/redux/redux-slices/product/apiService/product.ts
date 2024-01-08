import { apiSlice } from "@/api/apiSlice"

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({  
      getProducts: builder.query({
        query: ({
          limit = 10,
          currentPage = 0,
        } : {
          limit?: number,
          currentPage?: number,
        }) => ({
          url: `products?limit=${limit}&skip=${(currentPage * limit)}`,
          method: "GET"
        }),
        providesTags: ["product"]
      }), 

      searchProducts: builder.query({
        query: ({
          searchQuery = ""
        } : {
          searchQuery: string,
        }) => ({
          url: `products/search?q=${searchQuery}`,
          method: "GET"
        }),
        providesTags: ["product"]
      }), 
        
      getProduct: builder.query({
        query: (productId  : number) => ({
          url: `products/${productId}`,
          method: "GET"
        }),
        providesTags: ["productDetail"]
    }),  
  })
})

export const {
    useLazyGetProductsQuery,
    useGetProductQuery,
    useSearchProductsQuery,
} = productApiSlice
