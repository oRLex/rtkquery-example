import {rootApi} from "../../app/rootApi";

const posts = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query: (params) => {
        return {
          url: 'posts',
          params: params
        }
      },
      providesTags: ['GET_POSTS'],
    })
  }),
  overrideExisting: false,
})

export const {useGetPostsQuery} = posts