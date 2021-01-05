import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexContainer from '../Review/review_index_container';
import ReviewCreateContainer from '../Review/review_create_container';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    console.log("prop", this.props)
    console.log("state", this.state)
        
        this.handleSubmitToCart = this.handleSubmitToCart.bind(this);
        this.selectQuantity = this.selectQuantity.bind(this);
};

    componentDidMount() {
        // debugger;
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
        // debugger;
        const {product, cartItem} = this.props;
        
        if(!product) {
            return null;
        } 


        // debugger;
        return (
            <div>
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
                        {/* <form onSubmit={this.handleSubmitToCart}>
                            <div>
                                <h2>${product.price}</h2>
                            </div>
                        </form> */}

                        <h3 className='des-tag'>Description:</h3>
                        <p className='description'>{product.description}</p>
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