import { connect } from 'react-redux';
import CartItem from './cart_item';
import { destroyCartItem, fetchCartItems, updateCartItem } from '../../actions/cart_item_actions';
import { allProducts } from '../../actions/product_actions'

const mSTP = (state) => {
    console.log(state)
    return {
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.entities.users[state.session.id],
        products: Object.values(state.entities.products)

    };
};

const mDTP = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        allProducts: () => dispatch(allProducts()),
        updateCartItem: (cartItem, cartItemId) => dispatch(updateCartItem(cartItem, cartItemId)),
        destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId))
    }
};

export default connect(mSTP, mDTP)(CartItem);