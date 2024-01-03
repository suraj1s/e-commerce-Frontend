
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
}
