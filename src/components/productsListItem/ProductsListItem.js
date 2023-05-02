
const ProductsListItem = ({serialNumber, isNew, title, type, specification, guarantee, price, date, onDelete}) => {

    return (
        <li 
            className="card flex-row mb-4 shadow-lg text-dark p-3">
            <img src="https://www.sacbee.com/reviews/wp-content/uploads/2022/06/spectre-sacramento.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="Monitor" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body d-flex justify-content-between">
                <div className="card-body_text w-100">
                    <p className="text-secondary"><small>{ serialNumber }</small></p>
                    <p className={`card-text ${isNew === 'new' ? 'text-success' : 'text-warning'}`}>{ `${isNew.charAt(0).toUpperCase() + isNew.slice(1)}` }</p>
                    <h3 className="card-title display-2">{ title }</h3>
                    <p className="card-text">Type: { type }</p>
                    <p className="card-text">{ specification }</p>
                    <div className="d-flex">
                        <p className="card-text w-50">Guarantee:</p>
                        <p className="card-text mx-2 text-end">{ `From: ${guarantee.start};` }</p>
                        <p className="card-text mx-2 text-end">{ `To: ${guarantee.end};` }</p>
                    </div>
                    <p className="card-text text-end">
                        <u><strong>
                            {   price.map(el => {
                                    if(el.isDefault) {
                                        return `Price: ${el.value} ${el.symbol}`;
                                    } else if(price.length < 2) {
                                        return `Price: ${el.value} ${el.symbol}`;
                                    }
                                })
                            }
                        </strong></u>
                    </p>
                    <p className="card-text">Date: { date }</p>
                </div>
                <span onClick={onDelete} >
                    <button type="button" className="btn-close bg-danger" aria-label="Close"></button>
                </span>
            </div>
        </li>
    )
}

export default ProductsListItem;