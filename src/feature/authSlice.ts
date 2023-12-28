// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { SignOut, checkAuthToken, checkUser, createUser, forgotPasswordRequest, resetPassword } from './authApi';

// const initialState = {
//   value: 0,
//   logedInUser: null,
//   tokenCheck: false,
//   forgotPassword: null,
//   resetPassword: null,
//   error: null,
//   status: 'idle',
// };
// export const createUserAsync = createAsyncThunk(
//   'auth/createUser',
//   async (userData) => {
//     const response = await createUser(userData);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
// export const checkUserAsync = createAsyncThunk(
//   'auth/checkUser',
//   async (userData , {rejectWithValue}) => {
//     try{
//       const response = await checkUser(userData);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;

//     }
//     catch (error) {
//     return  rejectWithValue(error);

//     }
//   }
// );
// export const forgotPasswordRequestAsync = createAsyncThunk(
//   'auth/forgotPasswordRequest',
//   async (data , {rejectWithValue}) => {
//     try{
//       const response = await forgotPasswordRequest(data);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;

//     }
//     catch (error) {
//     return  rejectWithValue(error);

//     }
//   }
// );
// export const resetPasswordAsync = createAsyncThunk(
//   'auth/resetPassword',
//   async (data , {rejectWithValue}) => {
//     try{
//       const response = await resetPassword(data);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;

//     }
//     catch (error) {
//     return  rejectWithValue(error);

//     }
//   }
// );
// export const checkAuthTokenAsync = createAsyncThunk(
//   'auth/checkAuthToken',
//   async ( userData , {rejectWithValue}) => {
//     try{
//       const response = await checkAuthToken();
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;

//     }
//     catch (error) {
//     return  rejectWithValue(error);

//     }
//   }
// );

 

// export const SignOutAsync = createAsyncThunk(
//   'auth/SignOut',
//   async () => {
//     const response = await SignOut();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     increment: (
//         state
//     ) => {
//       state.value += 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUserAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(createUserAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.logedInUser = action.payload;
//       })
//       .addCase(checkUserAsync.pending, (state) => {
//         state.status = 'loading';
//       })
  
//       .addCase(checkUserAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.logedInUser = action.payload;
//       })
//       .addCase(checkUserAsync.rejected, (state , action) => {
//         state.status = 'error';
//         state.error = action.payload;
//         console.log(action.payload)

//       })

//       .addCase(SignOutAsync.rejected, (state ) => {
//         state.status = 'error';
       
//       })
//       .addCase(SignOutAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(SignOutAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.logedInUser = null;
//         console.log(state.logedInUser)
//       })
//       .addCase(checkAuthTokenAsync.rejected, (state ) => {
//         state.status = 'error';
//         state.tokenCheck = true;
//       })
//       .addCase(checkAuthTokenAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(checkAuthTokenAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.logedInUser = action.payload;
//         // console.log(action.payload);

//         state.tokenCheck = true;
//       })
//       .addCase(forgotPasswordRequestAsync.rejected, (state , action ) => {
//         state.forgotPassword = action.payload.error;
//         state.status = 'error';
//       })
//       .addCase(forgotPasswordRequestAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(forgotPasswordRequestAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.forgotPassword = action.payload;
//         console.log(action.payload);
//       })
//       .addCase(resetPasswordAsync.rejected, (state , action ) => {
//         state.resetPassword = action.payload.error;
//         state.status = 'error';
//       })
//       .addCase(resetPasswordAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(resetPasswordAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.logedInUser = action.payload;
//         console.log("from reset password " , action.payload);
//       })
      
//       ;  
//   },
// });


// export const selectLoggedInUser = (state) => state.auth.logedInUser;
// export const selectStatus = (state) => state.auth.status;
// export const selecterror = (state) => state.auth.error;
// export const selectTokenCheck = (state) => state.auth.tokenCheck;
// export const selectForgotPassStatus = (state) => state.auth.forgotPassword;
// export const selectIsLoading = (state) => state.auth.status;


// export default authSlice.reducer;