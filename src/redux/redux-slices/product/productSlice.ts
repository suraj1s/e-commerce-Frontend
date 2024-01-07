
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState : productStateType = {
    limit: 10 ,
    currentPage: 0,
    
  };
const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
        state.limit = action.payload
    },
    setCurrentPage: (state) => {
        state.currentPage += 1;
      },
    // any type of data can be added in redux store 
    //   state.data = [...state.data, ...action.payload ]
  }
})

export default products.reducer
export const { setLimit,setCurrentPage } = products.actions
