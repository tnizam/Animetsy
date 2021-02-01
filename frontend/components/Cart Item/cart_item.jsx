import React from 'react';
// import CartIndexItem from './cart_item_index';
import {Link} from 'react-router-dom';


class CartItem extends React.Component {
    constructor(props) {
        super(props);
   
        // this.updateQuantity = this.updateQuantity.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
    }

    handleUpdateQuantity(cartItem) {

        return (e) => this.props.updateCartItem({
            id: cartItem.id,
            product_id: cartItem.productId,
            total_cost: cartItem.price,
            quantity: e.target.value
        })

    }

    handleDeleteItem(e) {
        e.preventDefault();
        this.props.destroyCartItem(this.props.cartItemId);
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }


    handleDeleteAll(e) {
        e.preventDefault();
        this.props.destroyCartItems().then(() => 
            window.location.reload());
    }

    render() {
        console.log(this.props)

        const {cartItems, product} = this.props;
        let total = 0;
        let totalItems = 0;

        if(!cartItems) {
            return null;
        } 

        return (
            <div className="all-items">
                <ul className="cart-items">
                    {
                      cartItems.map((cartItem) => {
                        
                        
                        return (
                            <div className="cart-item">
                                <Link to={`/products/${cartItem.productId}`}>
                                <img src={cartItem.photoUrl} className="direct-img" />             
                                </Link>

                                <div className="name-container">
                                    <h2 className="pro-name">{cartItem.name}</h2>

                                    <button className="remove-button" onClick={() => 
                                        this.props.destroyCartItem(cartItem.id).then(() => 
                                            window.location.reload())
                                    }>Remove</button>
                                </div>

                                <div className="dropdown-container">
                                    <select className="dropdown"
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
                                </div>
                                <div className="price-container">
                                    <h2 className="item-total-price">${cartItem.price * cartItem.quantity}</h2>
                                    <p className="each-price">(${cartItem.price} each)</p>
                                </div>
                            </div>

                        )})
                    }
                </ul>
                <div className="cart-total">
                    {cartItems.forEach(cartItem => {
                        total += (cartItem.price * cartItem.quantity);
                        totalItems += 1;
                    })}
                    <div>{totalItems === 1 ? 
                    (<h3 className="total">Total({totalItems} item): ${total}</h3>)
                    : totalItems === 0 ? null
                    :(<h3 className="total">Total({totalItems} items): ${total}</h3>)}</div>

                    <div>
                    </div>

                    <div>
                        {cartItems.length > 0 ?
                            <button className="checkout-button" 
                            onClick={this.handleDeleteAll}>Checkout
                            </button> 
                            : <p className="empty">Cart is empty!!! <br/>
                                <p>Browse our large selection of items! </p></p> 
                        }
                    </div>

                </div>

                <div className="space"></div>
            </div>
        )
    }
}

export default CartItem;
