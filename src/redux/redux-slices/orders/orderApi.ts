import { apiSlice } from "@/redux/redux-store/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // updateOrder: builder.mutation({
    //   query: ({data}: {data : any}) => ({
    //     url: `order/update/`,
    //     method: "PATCH",
    //     body: data
    //   }),
    //   invalidatesTags: ["order"]
    // }),
    getOrders: builder.query<OrderData , any>({
      query: () => ({
        url: `orders/`,
        method: "GET",
      }),
      providesTags: ["order", "checkout"],
    }),
  }),
});

export const { useGetOrdersQuery } = orderApiSlice;
