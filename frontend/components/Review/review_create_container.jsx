import {connect} from 'react-redux';
import ReviewCreate from './review_create';
import { createReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        review: {
            authorId: state.session.id,
            body: " ",
            productId: ownProps.match.params.productId,
            rating: 1
        }

    }
}

const mDTP = dispatch => {
    return {
        createReview: (review, productId) => dispatch(createReview(review, productId))
    }
};

export default withRouter(connect(mSTP, mDTP)(ReviewCreate));