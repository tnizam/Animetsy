import React from 'react';
import { Link } from 'react-router-dom'


const ProductIndexItem = ({product}) => {

    return (
        <div className="each-product">
                <div className="each-img">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.photoUrl} className="direct-img" />
                    </Link>
                </div>
                <h2 className="product-name">{product.product_name}</h2>
                <h2 className="product-price">${product.price}</h2>
        </div>
    )
}

export default ProductIndexItem;