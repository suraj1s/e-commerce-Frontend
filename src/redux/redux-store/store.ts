import { apiSlice } from "@/redux/redux-store/apiSlice"
import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction
  } from "@reduxjs/toolkit"
  import authUser from "@/redux/redux-slices/auth/authSlice"
  import products from "@/redux/redux-slices/product/productSlice"
  import carts from "@/redux/redux-slices/cart/cartSlice"

  const combineReducer = combineReducers({
    // reducers 
    authUser,
    products,
    carts,
    [apiSlice.reducerPath]: apiSlice.reducer
  })
  
  const rootReducer = (state: any, action: any) => {
    return combineReducer(state, action)
  }
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  
    devTools: true
  })
  
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >
  