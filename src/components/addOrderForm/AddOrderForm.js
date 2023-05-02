import {useHttp} from '../../hooks/http.hook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { orderCreated } from '../ordersList/OrdersSlice';
import useDate from "../../hooks/useDate";

const AddOrderForm = () => {
    const [title, setTitle] = useState(''),
          [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const {request} = useHttp();
    const date = useDate(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuidv4(),
            title,
            date,
            description
        }

        request("http://localhost:3001/orders", "POST", JSON.stringify(newItem))
            .then(res => console.log(res, 'Success'))
            .then(dispatch(orderCreated(newItem)))
            .catch(err => console.log(err));

        setTitle('');
        setDescription('');
    }

    return (
        <form className="border p-4 shadow-lg rounded mb-4" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label fs-4">Order title</label>
                <input 
                    required
                    type="text" 
                    name="title" 
                    className="form-control" 
                    id="title" 
                    placeholder="Order title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label fs-4">Order title</label>
                <input 
                    required
                    type="text" 
                    name="desc" 
                    className="form-control" 
                    id="desc" 
                    placeholder="Order description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-success">Create order</button>
        </form>
    )
}

export default AddOrderForm;