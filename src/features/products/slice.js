import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../../app/rootApi";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: null
  },
  extraReducers: (builder) => {
    builder.addMatcher(rootApi.endpoints.getProduct.matchFulfilled, (state, action) => {
      state.product = action.payload
    })
  }
});

export const {setSelectedId} = productSlice.actions;

export default productSlice.reducer;
