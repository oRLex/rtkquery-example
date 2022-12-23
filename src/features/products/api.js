import {rootApi} from "../../app/rootApi";

const products = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => {
        return {
          url: 'products/search',
          params: params
        }
      },
      // слушает все invalidatesTags которые совпадают по названию
      providesTags: ['GET_PRODUCTS'],
    }),
    getProduct: build.query({
      query: id => {
        return {
          url: `products/${id}`
        }
      }
    }),
    createProduct: build.mutation({
      query: data => {
        return {
          url: 'products/add',
          method: 'POST',
          body: data
        }
      },
      // запускает запрос getProducts　после запроса createProduct
      // invalidatesTags: ['GET_PRODUCTS']
      invalidatesTags: (result, error) => !error && ['GET_PRODUCTS']
    })
  }),
  // if the same name of function are existing  - override the last function
  overrideExisting: false,
})

/**
 * useGetProductsQuery
 * useLazyGetPostsQuery
 * useUpdatePostMutation
 */

export const {useGetProductsQuery, useLazyGetProductsQuery, useLazyGetProductQuery, useCreateProductMutation} = products