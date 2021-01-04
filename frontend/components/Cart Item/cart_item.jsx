import React from 'react';
import CartIndexItem from './cart_item_index';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
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
                      cartItems.map((cartItem) => <CartIndexItem
                        cartItem={cartItem}
                        key={cartItem.id} 
                      />)
                    }
                </ul>
 
            </div>
        )
    }
}

export default CartItem;
