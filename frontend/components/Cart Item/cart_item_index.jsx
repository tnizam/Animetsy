import React from 'react';
import {Link} from 'react-router-dom';

const CartIndexItem = ({cartItem}) => {
    
    return (
        <div>
            <Link to={`/products/${cartItem.productId}`}>
                <img src={cartItem.photoUrl} className="direct-img" />
            </Link>
            <h2 className="product-name">{cartItem.name}</h2>
            <h2 className="product-price">${cartItem.price}</h2>
            <h2>{cartItem.quantity}</h2>
        </div>
    )
}

export default CartIndexItem;