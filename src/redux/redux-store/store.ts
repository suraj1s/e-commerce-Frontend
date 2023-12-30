import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction
  } from "@reduxjs/toolkit"
  import { apiSlice } from "../../api/apiSlice"
//   import permissionSlice from "../redux-slices/permission/permissionSlice"
  
  const combineReducer = combineReducers({
    // reducers
    tableData: permissionSlice,

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
  