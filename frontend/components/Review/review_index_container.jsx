import {connect} from 'react-redux';
import { destroyReview, fetchReviews, updateReview } from '../../actions/review_actions'
import ReviewIndex from './review_index'

const mSTP = (state, ownProps) => {
    console.log("reviewID", Object.keys(state.entities.reviews))
    // console.log("auth", state.session.id)
    return {
        reviews: Object.values(state.entities.reviews),
        productId: ownProps.productId,
        users: state.entities.users,
        authorId: state.session.id,
        userId: Object.keys(state.entities.users),
        reviewId: Object.keys(state.entities.reviews)
    }
};

const mDTP = (dispatch) => {
    return {
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        // destroyReview: (productId, reviewId) => dispatch(destroyReview(productId, reviewId)),
        destroyReview: (reviewId) => dispatch(destroyReview(reviewId)),
        updateReview: (productId, review) => dispatch(updateReview(productId, review))
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);