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

## Frontend (React):

- Enhances user experience with integrated search functionality and infinite scroll, utilizing debouncing for search optimization and infinite scroll for enhanced performance.
- Employs Redux Toolkit for streamlined state management, ensuring efficient data handling.
- Utilizes JWT authentication tokens and cookies for secure access.
- Utilizes RTK Query for optimized interaction with the backend API, enhancing performance through caching and efficient data fetching.
- Implements proper cached data validation and revalidation techniques to ensure data accuracy.
- Utilizes API interceptors to automatically obtain new access tokens using refresh tokens when they expire, ensuring uninterrupted user access and security.
- Implements protected routes for enhanced security, ensuring that only authorized users can access certain endpoints.
- Features custom components for seamless browsing, including post display, editing, and creation.
- Developed with focus on code reusability, prioritizing responsiveness and ease of maintenance.

## Backend (Django):

- Utilizes Django REST Framework (DRF) with JWT authentication to ensure secure user access and authorization.
- Implements CRUD operations for blog posts using a SQLite database for efficient data management.
- Employs JWT authentication tokens and cookies for secure user access, enhancing authentication and authorization processes.

## Installation

### frontend

1. Clone the repository:

   ```bash

   git clone https://github.com/suraj1s/e-commerce-Frontend  # frontend

   cd e-commerce-Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   ### backend

````bash
git clone https://github.com/suraj1s/e-commerce-backend
cd ./e-commerce-backend   # Navigate to the server directory
python3 -m venv env  # Create a virtual environment
source env/bin/activate  # Activate the virtual environment
pip install -r requirements.txt  # Install required Python packages
python manage.py makemigrations  # Create database migrations
python manage.py migrate  # Apply migrations to the database
python manage.py runserver  # Run the Django server

## Usage

1. Run the development server:
   ```bash
   npm run dev
````

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
