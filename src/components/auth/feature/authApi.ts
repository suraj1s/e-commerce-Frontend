export async function createUser(userData : UserType) : Promise<CreateUserType> {
    return new Promise(async (resolve) => {
      const response = await  fetch(`http://localhost:8080//api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      resolve({ data });
    });
  }
  
  export async function checkUser(userData : UserType): Promise<CheckUserType> {
    return new Promise(async (resolve, reject) => {
      try {
        const checkemail = await  fetch(`http://localhost:8080//api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (checkemail.ok) {
          const data = await checkemail.json();
          resolve({ data });
        } else {
          reject({ message: "invalid credentials" });
        }
      } catch (err) {
        reject({ message: "invalid credentials" });
      }
    });
  }
  
  export async function forgotPasswordRequest(data: { email: string }) : Promise<ForgotPasswordRequestType>{
    return new Promise(async (resolve, reject) => {
      try {
        const checkemail = await  fetch(`http://localhost:8080//api/auth/forgot-password-request/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (checkemail.ok) {
          const data = await checkemail.json();
          resolve({ data });
          // console.log(data);
        } else {
          const error  : ErrorType = await checkemail.json();
          reject({ error });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  export async function resetPassword(data : UserType) : Promise<ResetPasswordType>{
    return new Promise(async (resolve, reject) => {
      try {
        const checkemail = await  fetch(`http://localhost:8080//api/auth/reset-password/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (checkemail.ok) {
          const data = await checkemail.json();
          resolve({ data });
          // console.log(data);
        } else {
          const error  :ErrorType = await checkemail.json();
          reject({ error });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  
  
  export async function checkAuthToken() : Promise<CheckUserType> {
    return new Promise(async (resolve, reject) => {
      try {
        const checkemail = await  fetch(`http://localhost:8080//api/auth/login`);
        if (checkemail.ok) {
          const data = await checkemail.json();
          resolve({ data });
        } else {
          const error  :ErrorType = await checkemail.json();
          reject({ error });
        }
      } catch (error) {
        reject({error});
      }
    });
  }
  
  
  export async function SignOut() {
    return new Promise(async (resolve, reject) => {
      try {
        const signout = await  fetch(`http://localhost:8080//api/auth/logout`);
        if (signout.ok) {
          resolve({ data : "success" });
        } else {
          const error  :ErrorType = await signout.json();
          reject({ error });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  
  