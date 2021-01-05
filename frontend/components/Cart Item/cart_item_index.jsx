import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {destroyCartItem} from '../../actions/cart_item_actions';

const CartIndexItem = ({cartItem, destroyCartItem}) => {
    
    return (
        <div>
            <Link to={`/products/${cartItem.productId}`}>
                <img src={cartItem.photoUrl} className="direct-img" />
            </Link>
            <h2 className="product-name">{cartItem.name}</h2>
            <h2 className="product-price">${cartItem.price}</h2>
            <h2>{cartItem.quantity}</h2>
            <button onClick={() => 
                destroyCartItem(cartItem.id).then(() => 
                window.location.reload())
            }>Delete</button>
        </div>
    )
}

const mDTP = dispatch => {
    return {
        destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId))
    }
}

export default connect(null, mDTP)(CartIndexItem);
