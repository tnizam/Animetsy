import React from 'react';
// import CartIndexItem from './cart_item_index';
import {Link} from 'react-router-dom';


class CartItem extends React.Component {
    constructor(props) {
        super(props);
   
        // this.updateQuantity = this.updateQuantity.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleUpdateQuantity(cartItem) {

        return (e) => this.props.updateCartItem({
            id: cartItem.id,
            product_id: cartItem.productId,
            total_cost: cartItem.price,
            quantity: e.target.value,
            photoUrl: cartItem.photoUrl
        })

    }

    handleDeleteItem(e) {
        e.preventDefault();
        this.props.destroyCartItem(this.props.cartItemId);
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    render() {
        // console.log("props", this.props)
        
        const {cartItems, product} = this.props;
        console.log("props", this.props)
        let total = 0;

        if(!cartItems) {
            return null;
        } 

        return (
            <div>
                <ul>
                    {
                      cartItems.map((cartItem) => {
                        
                        
                        return (
                            <div>
                                <Link to={`/products/${cartItem.productId}`}>
                                <img src={cartItem.photoUrl} className="direct-img" />             
                                </Link>
                                <h2 className="product-name">{cartItem.name}</h2>
                                <h2 className="product-price">${cartItem.price * cartItem.quantity}</h2>
                                <h2>{cartItem.quantity}</h2>

                                <select className="dropdown-content"
                                    value={cartItem.quantity}
                                    id="quanityId"
                                    onChange={this.handleUpdateQuantity(cartItem)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>

                                </select>
{/* 
                                <button onClick={() => 
                                    this.props.destroyCartItem(cartItem.id).then(() => 
                                        window.location.reload())
                                }>Delete</button> */}
                                 <button onClick={this.handleDeleteItem}>Delete</button>
                            </div>

                        )})
                    }
                </ul>
                <div>
                    {cartItems.forEach(cartItem => {
                        total += (cartItem.price * cartItem.quantity)
                    })}
                    <h3>Total: ${total}</h3>
                </div>
            </div>
        )
    }
}

export default CartItem;
