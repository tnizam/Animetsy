import React from 'react';
import CartIndexItem from './cart_item_index';
import ProductIndexItem from '../product/product_index_item';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCartItems();
        this.props.allProducts();
    }

    render() {
        const {cartItems, products} = this.props;
        const cartProd = [];

        // products.forEach(product => {
        //     if(cartItems.productId === product.id) {
        //         cartProd.push(product)
        //     }    
        // })

        console.log("props", this.props.products)

        return (
            <div>
                <ul>
                    {
                      cartItems.map((cartItem, product) => <CartIndexItem
                        cartItem={cartItem}
                        key={cartItem.id} 
                                                                                                product={product}
                        key={product.id}
                      />)
                    }
                    {/* {                      
                    products.map(product => {
                          if(product.id === cartItems.productId) {
                            <ProductIndexItem
                                product={product}
                                key={product.id}
                            />
                          }
                      })
                    } */}
                </ul>
 
            </div>
        )
    }
}

export default CartItem;
