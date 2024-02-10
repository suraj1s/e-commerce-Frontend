
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { productStateType } from "./product"

const initialState : productStateType = {
  productSearchQuery: null ,
    
  };
const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductSearchQuery: (state, action: PayloadAction<string | null>) => {
        state.productSearchQuery = action.payload
    },
   
  }
})

export default products.reducer
export const { setProductSearchQuery } = products.actions
