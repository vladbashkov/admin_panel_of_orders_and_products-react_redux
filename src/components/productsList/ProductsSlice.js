import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const initialState = {
  products: [],
  productsLoadingStatus: "idle",
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  const { request } = useHttp();
  return request(
    "https://my-json-server.typicode.com/vladbashkov/admin_panel_of_orders_and_products-react_redux/products"
  );
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productCreated: (state, action) => {
      state.products.push(action.payload);
    },
    productDeleted: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoadingStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.productsLoadingStatus = "idle";
        state.products = actions.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.productsLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = productsSlice;

export default reducer;
export const { productCreated, productDeleted } = actions;
