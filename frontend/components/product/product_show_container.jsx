import {connect} from 'react-redux';
import ProductShow from './product_show';
import { eachProduct } from '../../actions/product_actions';
import {createCartItem} from '../../actions/cart_item_actions';

const mSTP = (state, ownProps) => {
    // debugger;
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
};

const mDTP = dispatch => {
    return {
        eachProduct: productId => dispatch(eachProduct(productId)),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    }
};

export default connect(mSTP, mDTP)(ProductShow);

