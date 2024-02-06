import { apiSlice } from "@/redux/redux-store/apiSlice"

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({  
      getProducts: builder.query({
        query: ({
          limit = 10,
          currentPage = 0,
          searchQuery = ""
        } : {
          limit?: number,
          currentPage?: number,
          searchQuery?: string | null,
        }) => ({
          url: `product/`,
          params: { limit , offset:currentPage * limit , search : searchQuery},
          method: "GET"
        }),
        providesTags: ["product"]
      }), 

      
      searchProductTitle: builder.query({
        query: ({
          searchQuery = "",
          limit = 6
        } : {
          searchQuery: string | null,
          limit?: number ,
        }) => ({
          url: `product/search/`,
          params: { limit,  page:0 , search : searchQuery },
          method: "GET"
        }),
        providesTags: ["product"]
      }), 
        
      getProduct: builder.query({
        query: (productId  : number) => ({
          url: `products/${productId}/`,
          method: "GET"
        }),
        providesTags: ["productDetail"]
    }),  
  })
})

export const {
    useLazyGetProductsQuery,
    useGetProductQuery,
    useLazySearchProductTitleQuery,
} = productApiSlice
