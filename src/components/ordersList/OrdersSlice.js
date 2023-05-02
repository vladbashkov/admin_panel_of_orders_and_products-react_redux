import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

const initialState = {
    orders: [],
    ordersLoadingStatus: 'idle'
}

export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    () => {
        const {request} = useHttp();
        return request("https://my-json-server.typicode.com/vladbashkov/admin_panel_of_orders_and_products-react_redux/orders");
    }
);

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderCreated: (state, action) => {
                        state.orders.push(action.payload)
                    },
        orderDeleted: (state,action) => {
                        state.orders = state.orders.filter(item => item.id !== action.payload);
                    },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, state => {
                    state.ordersLoadingStatus = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                    state.ordersLoadingStatus = 'idle';
                    state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, state => {
                    state.ordersLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const { actions, reducer } = ordersSlice;

export default reducer;
export const {
    orderCreated,
    orderDeleted
} = actions;