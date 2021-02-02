import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexContainer from '../Review/review_index_container';
import ReviewCreateContainer from '../Review/review_create_container';
import '@fortawesome/fontawesome-free/js/all.js';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }

        
        this.handleSubmitToCart = this.handleSubmitToCart.bind(this);
        this.selectQuantity = this.selectQuantity.bind(this);
};

    componentDidMount() {
        this.props.eachProduct(this.props.match.params.productId);
    };

    handleSubmitToCart(e) {
        e.preventDefault();

        const cartItem = {
            product_id: this.props.productId,
            quantity: this.state.quantity,
            total_cost: this.props.product.price
        }
        this.props.createCartItem(cartItem).then(() => 
        this.props.history.push('/cart'))
    }

    selectQuantity(quantity) {
        this.setState({quantity: quantity.target.value})
    }

    render () {
        const {product, cartItem} = this.props;
        
        if(!product) {
            return null;
        } 


        return (
            <div className="show-page">
                <div className="product-container">
                    <div>
                        <img src={product.photoUrl} className="pro-image"/>
                    </div>
                    <div className="product-info">
                        <h2 className='product-name-show'>{product.productName}</h2>
                        <h3 className='price-show'>${product.price}</h3>


                        <select className="dropdown-content"
                        onChange={this.selectQuantity}
                        >
                            <option value="1" selected='selected'>1</option>
                            <option value="2">2</option>›
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>

                        
                        <button className='cart-button'
                                onClick={this.handleSubmitToCart}
                        >Add to cart</button>

                        <h3 className='des-tag'>Description:</h3>
                        <p className='description'>{product.description}</p>
                        <br/>
                        <div className="extra-details">
                            <p className="extra-desc">
                                <i className="fas fa-hand-sparkles"></i> <strong>Handmade</strong></p>
                            <p className="extra-desc">
                                <i className="fas fa-truck"></i> <strong>Nice Choice!</strong> Enjoy 
                                free shipping when you spend $35!</p>
                            <p className="extra-desc">
                                <i className="fas fa-shopping-cart"></i> <strong>Other 
                                    people want this!</strong> Over 20 people 
                                    have this in their carts right now.
                            </p>
                            <p className="ship-return">Shipping and return policies</p>
                            <div className="grid-container">
                                <div className="shipping">
                                    <p className="ship">Ready to ship in</p>
                                    <p className="cap-ship">1-3 business days</p>
                                </div>
                                <div className="return">
                                    <p className="ship">Returns and exchanges</p>
                                    <p className="cap-ship">Accepted</p>
                                    <p className="ship">Exceptions may apply</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className='review-container'>
                        <ReviewIndexContainer
                            productId={product.id}
                        />
                        <ReviewCreateContainer
                            productId={product.id}
                        />
                    </div>
                <div className='blank'></div>

            </div>
        )
    }
}


export default ProductShow;