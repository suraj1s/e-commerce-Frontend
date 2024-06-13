# E-Commerce Site

This is a modern e-commerce site built with Next.js, TypeScript, Tailwind CSS, and RTK Query. It features a shopping cart, order management, search functionality with debouncing, and token-based authentication.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Scripts](#key-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Shopping Cart**: Add, remove, and update items in the cart.
- **Order Management**: Place and view orders.
- **Search Functionality**: Search for products with debouncing to optimize performance.
- **Token-Based Authentication**: Secure login and authentication using tokens.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.

## Installation

1. Clone the repository:

   ```bash

   git clone https://github.com/suraj1s/e-commerce-Frontend  # frontend

   https://github.com/suraj1s/e-commerce-backend  # backend
   cd e-commerce-Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000` to see the app in action.

## Project Structure

<!--
In the createAsyncThunk function, the generic types <typeA, typeB> define the types of the payload that the thunk returns and the argument it receives, respectively.



rtk query

# cacheing
query will cache the data so we need to revalidate the mutated data
for revalidation we need to use tags
to use tage we need to provide tagsType before endpoint
# tagsType ["string1" , "2" , "3]
# there are two types of tags
## provide : providesTags["string1" , "2"]
## invaalidate : invalidatesTage["string1"]

useLazy...Query :
providesTags :
prepareHeaders:
tagTypes:
.injectEndpoints :

const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const access_token = Cookies.get("access")
    if (access_token) {
      headers.set("authorization", `Bearer ${access_token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await baseQuery(args, api, extraOptions)
} -->
