import {connect} from 'react-redux';
import { allProducts } from '../../actions/product_actions'
import productIndex from './product_index'

const mSTP = (state) => {
    return {
        products: Object.values(state.entities.products)
    }
};

const mDTP = dispatch => {
    return {
        allProducts: () => dispatch(allProducts())
    }
};

export default connect(mSTP, mDTP)(productIndex);