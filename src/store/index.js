import { configureStore } from '@reduxjs/toolkit';
import orders from '../components/ordersList/OrdersSlice';
import products from '../components/productsList/ProductsSlice';
import filters from '../components/productsFilters/FiltersSlice';

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action);
};

const store = configureStore({
    reducer: { orders, products, filters },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;