import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});
const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = (productId) => dispatch => {
    return ReviewAPIUtil.fetchReviews(productId).then((reviews) => (
        dispatch(receiveReviews(reviews))
    ), errors => (
        dispatch(receiveReviewErrors(errors.responseJSON))
    ))
};

// export const fetchReview = (productId, reviewId) => dispatch => {
//     return ReviewAPIUtil.fetchReview(productId, reviewId).then((reviewId) => (
//         dispatch(receiveReviews(reviewId))
//     ), errors => (
//     dispatch(receiveReviewErrors(errors.responseJSON))
//     ))
// };

export const createReview = (review, productId) => dispatch => {
    return ReviewAPIUtil.createReview(review, productId).then((review) => (
        dispatch(receiveReview(review))
    ), errors => (
        dispatch(receiveReviewErrors(errors.responseJSON))
    ))
};


// export const createReview = (review) => dispatch => {
//     return ReviewAPIUtil.createReview(review).then((review) => (
//         dispatch(receiveReview(review))
//     ), errors => (
//         dispatch(receiveReviewErrors(errors.responseJSON))
//     ))
// };


