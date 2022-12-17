import {configureStore} from "@reduxjs/toolkit";
import {rootApi} from "./rootApi";
import productReducer from '../features/products/slice'

const apiReducers = {
  [rootApi.reducerPath]: rootApi.reducer
};

const middlewares = [rootApi.middleware];

const store = configureStore({
  reducer: {
    ...apiReducers,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(middlewares)
});
export default store;
