import {createSlice} from "@reduxjs/toolkit";
import {rootApi} from "../../app/rootApi";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: null
  }
});

export const {setSelectedId} = productSlice.actions;

export default productSlice.reducer;
