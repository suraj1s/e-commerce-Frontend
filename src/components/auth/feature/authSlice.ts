import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignOut, checkAuthToken, checkUser, createUser, forgotPasswordRequest, resetPassword } from './authApi';

interface InitailStateType {
  value: number;
  logedInUser: UserType | null;
  tokenCheck: boolean;
  forgotPassword: any;
  resetPassword: any;
  error: any;
  status: string;
}

const initialState : InitailStateType = {
  value: 0,
  logedInUser: null ,
  tokenCheck: false,
  forgotPassword: null,
  resetPassword: null,
  error: null,
  status: 'idle',
};

export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (userData : UserType )  => {
    const response  = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  'auth/checkUser',
  async (userData : UserType , {rejectWithValue}) => {
    try{
      const response : any = await checkUser(userData);
      // The value we return becomes the `fulfilled` action payload
      return response.data;

    }
    catch (error) {
    return  rejectWithValue(error);

    }
  }
);
export const forgotPasswordRequestAsync = createAsyncThunk(
  'auth/forgotPasswordRequest',
  async (data : {email : string} , {rejectWithValue}) => {
    try{
      const response : any = await forgotPasswordRequest(data);
      // The value we return becomes the `fulfilled` action payload
      return response.data;

    }
    catch (error) {
    return  rejectWithValue(error);

    }
  }
);
export const resetPasswordAsync = createAsyncThunk(
  'auth/resetPassword',
  async (data : UserType , {rejectWithValue}) => {
    try{
      const response : any = await resetPassword(data);
      // The value we return becomes the `fulfilled` action payload
      return response.data;

    }
    catch (error) {
    return  rejectWithValue(error);

    }
  }
);
export const checkAuthTokenAsync = createAsyncThunk(
  'auth/checkAuthToken',
  async ( userData , {rejectWithValue}) => {
    try{
      const response : any = await checkAuthToken();
      // The value we return becomes the `fulfilled` action payload
      return response.data;

    }
    catch (error) {
    return  rejectWithValue(error);

    }
  }
);

 

export const SignOutAsync = createAsyncThunk(
  'auth/SignOut',
  async () => {
    const response : any = await SignOut();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (
        state
    ) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action : PayloadAction<UserType> ) => {
        state.status = 'idle';
        state.logedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
  
      .addCase(checkUserAsync.fulfilled, (state, action : PayloadAction<UserType> ) => {
        state.status = 'idle';
        state.logedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state , action : PayloadAction<any> ) => {
        state.status = 'error';
        state.error = action.payload;
        console.log(action.payload)

      })

      .addCase(SignOutAsync.rejected, (state ) => {
        state.status = 'error';
       
      })
      .addCase(SignOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SignOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.logedInUser = null;
        console.log(state.logedInUser)
      })
      .addCase(checkAuthTokenAsync.rejected, (state ) => {
        state.status = 'error';
        state.tokenCheck = true;
      })
      .addCase(checkAuthTokenAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkAuthTokenAsync.fulfilled, (state, action : PayloadAction<any> ) => {
        state.status = 'idle';
        state.logedInUser = action.payload;
        // console.log(action.payload);

        state.tokenCheck = true;
      })
      .addCase(forgotPasswordRequestAsync.rejected, (state , action : PayloadAction<any> ) => {
        state.forgotPassword = action.payload.error;
        state.status = 'error';
      })
      .addCase(forgotPasswordRequestAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(forgotPasswordRequestAsync.fulfilled, (state, action : PayloadAction<any> ) => {
        state.status = 'idle';
        state.forgotPassword = action.payload;
        console.log(action.payload);
      })
      .addCase(resetPasswordAsync.rejected, (state , action : PayloadAction<any> ) => {
        state.resetPassword = action.payload.error;
        state.status = 'error';
      })
      .addCase(resetPasswordAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPasswordAsync.fulfilled, (state, action : PayloadAction<any> ) => {
        state.status = 'idle';
        state.logedInUser = action.payload;
        console.log("from reset password " , action.payload);
      })
      
      ;  
  },
});


export const selectLoggedInUser = (state : any) => state.auth.logedInUser;
export const selectStatus = (state : any) => state.auth.status;
export const selecterror = (state : any) => state.auth.error;
export const selectTokenCheck = (state : any) => state.auth.tokenCheck;
export const selectForgotPassStatus = (state : any) => state.auth.forgotPassword;
export const selectIsLoading = (state : any) => state.auth.status;


export default authSlice.reducer;