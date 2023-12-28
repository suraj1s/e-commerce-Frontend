
import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "../features/Product/productListSlice";
// import authReducer from "../features/auth/authSlice";
// import cartReducer from "../features/cart/cartSlice";
// import orderReducer from "../features/orders/orderSlice";
// import userReducer from "../features/user/userSlice";
// import dashboardReducer from "../features/admin/Dashboard/dashboardSlice";

export const store = () => {
    return configureStore({
        reducer: {
            // product: productReducer,
            // auth : authReducer,
            // cart : cartReducer,
            // order : orderReducer,
            // user: userReducer,
            // dashboard : dashboardReducer
          },
    })
  }
  
  // Infer the type of store
  export type AppStore = ReturnType<typeof store>
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']