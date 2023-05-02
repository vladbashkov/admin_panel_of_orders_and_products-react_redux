import {useHttp} from '../../hooks/http.hook';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { productCreated } from '../productsList/ProductsSlice';
import useDate from "../../hooks/useDate";

const AddProductForm = () => {
    const [title, setTitle] = useState(''),
          [serialNumber, setserialNumber] = useState(''),
          [isNew, setIsNew] = useState(''),
          [photo, setPhoto] = useState(''),
          [type, setType] = useState(''),
          [specification, setSpecification] = useState(''),
          [guarStart, setGuarStart] = useState(''),
          [guarEnd, setGuarEnd] = useState(''),
          [priceList, setPriceList] = useState([{value: '', symbol: '', isDefault: false}]);

    const {filters, filtersLoadingStatus} = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const date = useDate(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newItem = {
            id: uuidv4(),
            serialNumber,
            isNew,
            photo,
            title,
            type,
            specification,
            guarantee: {
                start: guarStart,
                end: guarEnd
            },
            price: priceList,
            date
        }

        request("http://localhost:3001/products", "POST", JSON.stringify(newItem))
            .then(res => {
                console.log(res, 'Success');
                document.getElementById('createProduct').innerText = "Success";
                setTimeout(() => {
                    document.getElementById('collapseForm').classList.remove('show');
                    document.getElementById('createProduct').innerText = "Create product";
                }, 2000);
            })
            .then(dispatch(productCreated(newItem)))
            .catch(err => console.log(err));

        setserialNumber('');
        setIsNew('');
        setPhoto('');
        setTitle('');
        setType('');
        setSpecification('');
        setGuarStart('');
        setGuarEnd('');
        setPriceList([{value: '', symbol: '', isDefault: false}]);
    }

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Loading</option>
        } else if (status === "error") {
            return <option>Error</option>
        }
        
        if (filters && filters.length > 0 ) {
            return filters.map(({name, label}) => {
                // eslint-disable-next-line
                if (name === 'all')  return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    const handleCheckboxes = () => {
        let checkboxes = document.querySelectorAll('input[type=checkbox]');

        checkboxes.forEach(el => {
            el.checked = false;
        });
        priceList.forEach(el => {
            el.isDefault = false;
        });
    }

    const handlePriceChange = (e, index, checkbox = false) => {
        const { name, value, checked } = e.target;
        const list = [...priceList];
        if(checkbox) {
            handleCheckboxes();
            e.target.checked = checked;
            list[index][name] = checked;
        } else {
            list[index][name] = value;
        }
        setPriceList(list);
    };

    const handlePriceAdd = () => {
        console.log(priceList);
        setPriceList([...priceList, { value: '', symbol: '', isDefault: false }]);
    }

    const handlePriceRemove = (index) => {
        const list = [...priceList];
        list.splice(index, 1);
        setPriceList(list);
    };

    return (
        <form className="border p-4 shadow-lg rounded mb-4" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="serialNumber" className="form-label fs-4">Serial Number</label>
                <input 
                    required
                    type="text" 
                    name="serialNumber" 
                    className="form-control" 
                    id="serialNumber" 
                    placeholder="Serial Number"
                    value={serialNumber}
                    onChange={(e) => setserialNumber(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="isNew" className="form-label">Product Usage</label>
                <select 
                    required
                    className="form-select" 
                    id="isNew" 
                    name="isNew"
                    value={isNew}
                    onChange={(e) => setIsNew(e.target.value)}>
                    <option value="">Usage</option>
                    { renderFilters(filters, filtersLoadingStatus) }
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label fs-4">Product Title</label>
                <input 
                    required
                    type="text" 
                    name="title" 
                    className="form-control" 
                    id="title" 
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="type" className="form-label fs-4">Product Type</label>
                <input 
                    required
                    type="text" 
                    name="type" 
                    className="form-control" 
                    id="type" 
                    placeholder="Product Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="specification" className="form-label fs-4">Product specification</label>
                <input 
                    required
                    type="text" 
                    name="specification" 
                    className="form-control" 
                    id="specification" 
                    placeholder="Product specification"
                    value={specification}
                    onChange={(e) => setSpecification(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="guarStart" className="form-label fs-4">Product Guarantee Start</label>
                <input 
                    required
                    type="text" 
                    name="guarStart" 
                    className="form-control" 
                    id="guarStart" 
                    placeholder="Product Guarantee"
                    value={guarStart}
                    onChange={(e) => setGuarStart(e.target.value)}/>
                <label htmlFor="guarEnd" className="form-label fs-4">Product Guarantee End</label>
                <input 
                    required
                    type="text" 
                    name="guarEnd" 
                    className="form-control" 
                    id="guarEnd" 
                    placeholder="Product Guarantee"
                    value={guarEnd}
                    onChange={(e) => setGuarEnd(e.target.value)}/>
            </div>
            <div className="mb-3">
                <h3 className='fs-4'>Product Price</h3>
                {
                    priceList.map((price, index) => {
                        return (
                            <div className="prices-container" key={`key${index}`}>
                                <div className="border rounded p-4 mb-3">
                                    <input 
                                        required
                                        type="text" 
                                        key={index}
                                        name="value" 
                                        className="form-control mb-2" 
                                        id={ price.value } 
                                        placeholder="Price"
                                        value={ price.value }
                                        onChange={(e) => handlePriceChange(e, index)}/>
                                    <input 
                                        required
                                        type="text" 
                                        key={index+1}
                                        name="symbol" 
                                        className="form-control mb-2" 
                                        id={ price.symbol }
                                        placeholder="Currency"
                                        value={ price.symbol }
                                        onChange={(e) => handlePriceChange(e, index)}/>
                                    <div 
                                        className="form-check form-switch"
                                    >
                                        <label className="form-check-label" htmlFor={`flexSwitchCheckDefault_${index}`}>Default price</label>
                                        <input 
                                            type="checkbox" 
                                            key={index+2}
                                            name="isDefault" 
                                            className="form-check-input mb-2" 
                                            id={`flexSwitchCheckDefault_${index}`}
                                            value={ price.isDefault }
                                            onChange={(e) => handlePriceChange(e, index, true)}/>
                                    </div>
                                    {
                                        priceList.length !== 1 && (
                                            <button
                                              type="button"
                                              onClick={() => handlePriceRemove(index)}
                                              className="btn btn-danger mt-2"
                                              key={index+3}
                                            >
                                              <span>Delete Price</span>
                                            </button>
                                        )
                                    }
                                </div>
                                {
                                    priceList.length - 1 === index && (
                                        <button
                                            type="button"
                                            onClick={handlePriceAdd}
                                            className="btn btn-success my-4 w-100"
                                            key={index+4}
                                            >
                                                <span>Add Price</span>
                                        </button>
                                    )
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
            <button type="submit" id="createProduct" className="btn btn-success w-100">Create product</button>
        </form>
    )
}

export default AddProductForm;