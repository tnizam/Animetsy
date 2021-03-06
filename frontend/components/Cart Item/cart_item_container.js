import { connect } from 'react-redux';
import CartItem from './cart_item';
import { destroyCartItem, fetchCartItems, updateCartItem, destroyCartItems } 
    from '../../actions/cart_item_actions';
import { allProducts, eachProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => {
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
        destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId)),
        destroyCartItems: () => dispatch(destroyCartItems())
    }
};

export default connect(mSTP, mDTP)(CartItem);