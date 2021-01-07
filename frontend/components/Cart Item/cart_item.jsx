import React from 'react';
import CartIndexItem from './cart_item_index';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    updateQuantity(quantity) {
        this.setState({quantity: quantity.target.value}) 

    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    render() {
        console.log("props", this.props)
        
        const {cartItems} = this.props;

        return (
            <div>
                <ul>
                    {
                      cartItems.map((cartItem) => {
                        return (
                            <div>

                                <CartIndexItem
                                    cartItem={cartItem}
                                    key={cartItem.id} 
                                    updateQuantity = {this.updateQuantity}
                                    handleUpdate = {this.handleUpdateSubmit}
                                /> 
                                <select className="dropdown-content"
                                    value={cartItem.quantity}
                                    id="quanityId"
                                onChange={this.updateQuantity}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>

                                </select>
                                
                            
                            </div>
                        )
                      })
                    }
                </ul>
                {/* <ul>
                    {
                      cartItems.map((cartItem) => 
                        <select className="dropdown-content"
                            value={cartItem.quantity}
                            id="quanityId"
                        // onChange={changeQuantity()}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>›
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>
                      )
                    }
                </ul> */}
 
            </div>
        )
    }
}

export default CartItem;
