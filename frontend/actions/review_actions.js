import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});
const receiveReview = ({review}) => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const fetchReviews = (productId) => dispatch => {
    return ReviewAPIUtil.fetchReviews(productId).then((reviews) => (
        dispatch(receiveReviews(reviews))
    ), errors => (
        dispatch(receiveReviewErrors(errors.responseJSON))
    ))
};


export const createReview = (review, productId) => dispatch => {
    return ReviewAPIUtil.createReview(review, productId).then((review) => (
        dispatch(receiveReview(review))
    ), errors => (
        dispatch(receiveReviewErrors(errors.responseJSON))
    ))
};

// export const destroyReview = (productId, reviewId) => dispatch => {
//     return ReviewAPIUtil.destroyReview(productId, reviewId).then((reviewId) => (
//         dispatch(removeReview(reviewId))
//     ), errors => (
//         dispatch(receiveReviewErrors(errors.responseJSON))
//     ))
// }

// export const updateReview = (productId, review) => dispatch => {
//     return ReviewAPIUtil.updateReview(productId, review).then((review) => (
//         dispatch(receiveReview(review))
//     ), errors => (
//         dispatch(receiveReviewErrors(errors.responseJSON))
//     ))
// };

export const destroyReview = (reviewId) => dispatch => {
    return ReviewAPIUtil.destroyReview(reviewId).then((reviewId) => (
        dispatch(removeReview(reviewId))
    ), errors => (
        dispatch(receiveReviewErrors(errors.responseJSON))
    ))
}

export const updateReview = (review) => dispatch => {
    return ReviewAPIUtil.updateReview(review).then((review) => (
        dispatch(receiveReview(review))
    ), errors => (
        dispatch(receiveReviewErrors(errors.responseJSON))
    ))
};