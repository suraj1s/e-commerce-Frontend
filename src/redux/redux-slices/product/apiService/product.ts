import { apiSlice } from "@/redux/redux-store/apiSlice"

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({  
      getProducts: builder.query({
        query: ({
          limit = 10,
          currentPage = 0,
          search = ""
        } : {
          limit?: number,
          currentPage?: number,
          search?: string
        }) => ({
          // url: `products?limit=${limit}&skip=${(currentPage * limit)}`,
          url: `products`,
          params: { limit, page:currentPage , search },
          method: "GET"
        }),
        providesTags: ["product"]
      }), 

      searchProducts: builder.query({
        query: ({
          searchQuery = ""
        } : {
          searchQuery: string | null,
        }) => ({
          url: `products/search?q=${searchQuery}`,
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
          url: `products/search?q=${searchQuery}&limit=${limit}`,
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
    useLazySearchProductsQuery,
    useLazySearchProductTitleQuery,
} = productApiSlice
