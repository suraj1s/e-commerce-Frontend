
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState : productStateType = {
  productSearchQuery: '' ,
    
  };
const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductSearchQuery: (state, action: PayloadAction<string>) => {
        state.productSearchQuery = action.payload
    },
   
  }
})

export default products.reducer
export const { setProductSearchQuery } = products.actions
