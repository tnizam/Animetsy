import {connect} from 'react-redux';
import { allProducts } from '../../actions/product_actions'
import Search from './search'

const mSTP = (state, ownProps) => {
    const search = ownProps.match.params.search.toLowerCase();
    const products = Object.values(state.entities.products);
    return {
        products: Object.values(state.entities.products),
        nameSearches: products.filter(product => {
            return(product.productName.toLowerCase().includes(search))
        })
    }
};

const mDTP = dispatch => {
    return {
        allProducts: () => dispatch(allProducts())
    }
};

export default connect(mSTP, mDTP)(Search);