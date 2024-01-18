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
          url: `products`,
          params: { limit, page:currentPage , searchQuery },
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
          url: `products`,
          params: { limit,  page:0 ,  searchQuery },
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
    useLazySearchProductTitleQuery,
} = productApiSlice
