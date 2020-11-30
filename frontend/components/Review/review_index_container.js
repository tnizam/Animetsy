import {connect} from 'react-redux';
import { fetchReviews } from '../../actions/review_actions'
import ReviewIndex from './review_index'

const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        productId: ownProps.productId 
    }
};

const mDTP = (dispatch) => {
    return {
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);