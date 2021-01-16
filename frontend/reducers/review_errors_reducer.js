import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.errors;
        case RECEIVE_REVIEW:
            return [];
        default:
            return state;
    }
};
