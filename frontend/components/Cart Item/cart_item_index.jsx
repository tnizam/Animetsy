import React from 'react';
import {Link} from 'react-router-dom';

const CartIndexItem = ({product, cartItem}) => {
    return (
        <div>
            <Link to={`/products/${product.id}`}>
                <img src={product.photoUrl} className="direct-img" />
            </Link>
            <h2 className="product-name">{product.product_name}</h2>
            <h2 className="product-price">${product.price}</h2>
            <h2>{cartItem.quantity}</h2>
        </div>
    )
}

export default CartIndexItem;