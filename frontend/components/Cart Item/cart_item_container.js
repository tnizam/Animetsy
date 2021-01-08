import { connect } from 'react-redux';
import CartItem from './cart_item';
import { destroyCartItem, fetchCartItems, updateCartItem } from '../../actions/cart_item_actions';
import { allProducts, eachProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => {
    console.log("state",state)
    console.log("own", ownProps)
    return {
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.entities.users[state.session.id],
        // product: state.entities.products[parseInt(ownProps.match.params.productId)],
        cartItemId: Object.keys(state.entities.cartItems)
    };
};

const mDTP = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        fetchCartItem: (cartItemId) => dispatch(fetchCartItem(cartItemId)),

        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
        destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId))
    }
};

export default connect(mSTP, mDTP)(CartItem);