import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions'
import merge from 'lodash/merge';

const ReviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return merge({}, action.reviews)
        case RECEIVE_REVIEW:

            return Object.assign({}, oldState, action.review);    

        default:
            return oldState;
    }
}

export default ReviewsReducer;

