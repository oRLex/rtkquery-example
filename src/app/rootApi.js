// Need to use the React-specific entry point to allow generating React hooks
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
    // set token here
    // prepareHeaders: headers => headers,
    // change query params serializer
    // paramsSerializer: params => params
  }),
  endpoints: () => ({}),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
// export const {useGetPokemonByNameQuery} = rootApi