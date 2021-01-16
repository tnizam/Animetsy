import {connect} from 'react-redux';
import ProductShow from './product_show';
import { eachProduct, allProducts } from '../../actions/product_actions';
import {createCartItem} from '../../actions/cart_item_actions';

const mSTP = (state, ownProps) => {

    const proId = parseInt(ownProps.match.params.productId);
    const pro = state.entities.products[proId];

    return {
        product: state.entities.products[proId],
        cartItems: state.entities.cartItems,
        productId: parseInt(ownProps.match.params.productId),
        products: state.entities.products,
        
    }
};

const mDTP = dispatch => {
    return {
        allProducts: () => dispatch(allProducts()),
        eachProduct: productId => dispatch(eachProduct(productId)),
        updateCartItem: (cartItem, cartItemId) => dispatch(updateCartItem(cartItem, cartItemId)),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    }
};

export default connect(mSTP, mDTP)(ProductShow);

