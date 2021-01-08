import React from 'react';
// import CartIndexItem from './cart_item_index';
import {Link} from 'react-router-dom';


class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
        // this.updateQuantity = this.updateQuantity.bind(this);

    }

    updateQuantity(cartItem) {
        // debugger
        // if(newQuantity !== this.state.quantity){
        //     this.setState({quantity: newQuantity})
        // }

        

        return (e) => this.props.updateCartItem({
            id: cartItem.id,
            product_id: cartItem.productId,
            total_cost: cartItem.totalCost,
            quantity: e.target.value,
            photoUrl: cartItem.photoUrl
        })

    }



    componentDidMount() {
        this.props.fetchCartItems();
    }

    render() {
        // console.log("props", this.props)
        
        const {cartItems, product} = this.props;
        console.log("props", this.props)

        if(!cartItems) {
            return null;
        } 

        return (
            <div>
                <ul>
                    {
                      cartItems.map((cartItem) => {
                        if(!cartItem) {
                            return null;
                        }    
                        
                        
                        return (
                            <div>

                                {/* <CartIndexItem
                                    cartItem={cartItem}
                                    key={cartItem.id} 
                                />  */}
                                <Link to={`/products/${cartItem.productId}`}>
                                <img src={cartItem.photoUrl} className="direct-img" />             
                                </Link>
                                <h2 className="product-name">{cartItem.name}</h2>
                                <h2 className="product-price">${cartItem.price}</h2>
                                <h2 className="product-price">${cartItem.id}</h2>
                                <h2>{cartItem.quantity}</h2>

                                <select className="dropdown-content"
                                    value={cartItem.quantity}
                                    id="quanityId"
                                    onChange={this.updateQuantity(cartItem)}
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
            </div>
        )
    }
}

export default CartItem;
