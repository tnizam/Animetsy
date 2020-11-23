import {connect} from 'react-redux';
import ProductShow from './product_show';
import { eachProduct } from '../../actions/product_actions'

const mSTP = (state, ownProps) => {
    // debugger;
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
};

const mDTP = dispatch => {
    return {
        eachProduct: productId => dispatch(eachProduct(productId))
    }
};

export default connect(mSTP, mDTP)(ProductShow);

