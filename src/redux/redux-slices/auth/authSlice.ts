
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const initialState : AuthInitailStateType = {
    logedInUser: null ,
    tokenCheck: false,
    forgotPassword: null,
  };


const authUser = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setLoginedUser: (state, action: PayloadAction<UserType>) => {
      state.logedInUser = action.payload
    },
    // any type of data can be added in redux store 
    //   state.data = [...state.data, ...action.payload ]
  }
})

export default authUser.reducer
export const { setLoginedUser, } = authUser.actions
