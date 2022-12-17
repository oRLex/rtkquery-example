import {rootApi} from "../../app/rootApi";

const postsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => 'posts',
    }),
  }),
  // if the same name of function are existing  - override the last function
  overrideExisting: false,
})

/**
 * useGetPostsQuery
 * useLazyGetPostsQuery
 * useUpdatePostMutation
 */

export const { useGetPostsQuery, useLazyGetPostsQuery } = postsApi