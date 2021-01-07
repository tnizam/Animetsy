import { connect } from 'react-redux';
import CartItem from './cart_item';
import { destroyCartItem, fetchCartItems, updateCartItem } from '../../actions/cart_item_actions';
import { allProducts, eachProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => {
    console.log("state",state)
    console.log("own", ownProps)
    return {
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.entities.users[state.session.id]
        // products: Object.values(state.entities.products),
        // product: state.entities.products[ownProps.match.params.productId]
    };
};

const mDTP = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        fetchCartItem: (cartItemId) => dispatch(fetchCartItem(cartItemId)),

        // allProducts: () => dispatch(allProducts()),
        // eachProduct: productId => dispatch(eachProduct(productId)),
        updateCartItem: (cartItem, cartItemId) => dispatch(updateCartItem(cartItem, cartItemId)),
        // destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId))
    }
};

export default connect(mSTP, mDTP)(CartItem);