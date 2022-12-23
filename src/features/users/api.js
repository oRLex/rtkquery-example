import {rootApi} from "../../app/rootApi";

const users = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => {
        return {
          url: 'users',
          params: params
        }
      },
      providesTags: ['GET_USERS'],
    })
  }),
  overrideExisting: false,
})

/**
 * useGetProductsQuery
 * useLazyGetPostsQuery
 * useUpdatePostMutation
 */

export const {useGetUsersQuery} = users