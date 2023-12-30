// user data type
interface AuthInitailStateType {
    logedInUser: UserType | null;
    tokenCheck: boolean;
    forgotPassword: any;
    error: any;
    status: string;
  }

type AddressType = {
    Country : string,
    StreetAddress : string,
    StateOrProvince : string
    ZIPorPostalCode : number,
    }
    
type UserType = {
    name ?: string,
    token ? : string,
    email ? : string,
    password ?: string,
    role ?: string,
    phone ?: number,
    address ?: AddressType,
    }

type ErrorType = {
    message : string,
    }

// auth endpoint return data type 
type CreateUserType = {
    token : string,
}
type CheckUserType = {
    token : string,
}
type GetUserType = {
    role : string,
}

type ForgotPasswordRequestType = {
    success : string,
}
type ResetPasswordType = {
    token : string,
}
type GetUserType = {
    role : string,
}
