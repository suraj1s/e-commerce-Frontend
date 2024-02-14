
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { cartStateType } from "./cart"

const initialState : cartStateType = {
  cartItemCount: 0,
  };
const carts = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCartItemCountQuery: (state, action: PayloadAction<number | null>) => {
        state.cartItemCount = action.payload
    },
   
  }
})

export default carts.reducer
export const { setCartItemCountQuery } = carts.actions
