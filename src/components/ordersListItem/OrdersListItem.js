const OrdersListItem = ({title, date, description, onDelete, getProducts}) => {

    return (
        <li 
            className="card flex-row mb-4 shadow-lg text-dark p-1">
            <img src="https://www.sacbee.com/reviews/wp-content/uploads/2022/06/spectre-sacramento.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="Monitor" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body d-flex justify-content-between">
                <div className="card-body_text">
                    <h3 className="card-title display-3">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{date}</p>
                </div>
                <span onClick={getProducts}
                    className="rounded-pill align-self-center">
                    <button type="button" className="btn btn-info text-white" aria-label="Info">Info</button>
                </span>
                <span >
                    <button onClick={onDelete} type="button" className="btn-close bg-danger" aria-label="Close"></button>
                </span>
            </div>
        </li>
    );
}

export default OrdersListItem;