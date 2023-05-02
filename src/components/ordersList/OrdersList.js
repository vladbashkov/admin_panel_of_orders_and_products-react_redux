import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { fetchOrders, orderDeleted } from './OrdersSlice';
import OrdersListItem from "../ordersListItem/OrdersListItem";
import AddItemForm from "../addItemForm/AddItemForm";
import Spinner from '../spinner/Spinner';
import { useHttp } from '../../hooks/http.hook';

const OrdersList = () => {
    const { orders, ordersLoadingStatus } = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchOrders());

        // eslint-disable-next-line
    }, []);

    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/orders/${id}`, "DELETE")
            .then(data => console.log(data, 'Deleted'))
            .then(dispatch(orderDeleted(id)))
            .catch(err => console.log(err));

        // eslint-disable-next-line  
    }, [request]);

    if (ordersLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (ordersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Loading error</h5>
    }

    const renderOrdersList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    in={true}
                    classNames="fade">
                    <h5 className="text-center mt-5">No orders yet</h5>
                </CSSTransition>
            )
        }

        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition 
                    key={id}
                    in={true}
                    timeout={500}
                    classNames="fade">
                    <OrdersListItem  {...props} key={id}  onDelete={() => onDelete(id)} />
                </CSSTransition>
            )
        })
    }

    const elements = renderOrdersList(orders);
    return (
        <div className='mb-3 card-body'>
            <button className="btn btn-success mb-4 btn-lg btn-block w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
                Add New Order
            </button>
            <div className="collapse" id="collapseForm">
                <AddItemForm itemType="orders" />
            </div>
                <ul>
                    {elements}
                </ul>
        </div>
    )
}

export default OrdersList;