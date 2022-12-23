import {rootApi} from "../../app/rootApi";

const album = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbum: build.query({
      query: (params) => {
        return {
          url: 'albums',
          params: params
        }
      },
      providesTags: ['GET_ALBUM']
    })
  }),
  overrideExisting: false,
})

export const {useGetAlbumQuery} = album