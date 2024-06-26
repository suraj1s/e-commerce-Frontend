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

      createProduct: builder.mutation({
        query: (product : any) => ({
          url: `product/create/`,
          method: "POST",
          body: product
        }),
        invalidatesTags: ["product"]
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
          url: `product/${productId}/`,
          method: "GET"
        }),
        providesTags: ["productDetail"]
    }),  
  })
})

export const {
    useLazyGetProductsQuery,
    useGetProductQuery,
    useCreateProductMutation,
    useLazySearchProductTitleQuery,
} = productApiSlice
