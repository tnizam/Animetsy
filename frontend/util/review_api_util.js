
export const fetchReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}/reviews`
    })
};

export const createReview = (review, productId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/products/${productId}/reviews`,
        data: { review }
    })
}

// check before moving on

// export const destroyReview = (productId, reviewId) => {
//     return $.ajax({
//         method: 'DELETE',
//         url: `/api/products/${productId}/reviews/${reviewId}`
//     })
// };

// export const updateReview = (productId, review) => {
//     return $.ajax({
//         method: 'PATCH',
//         url: `/api/products/${productId}/reviews/${review.id}`,
//         data: { review: review }
//     })
// };

export const destroyReview = (reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
};

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review: review }
    })
};