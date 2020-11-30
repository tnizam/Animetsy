
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


// export const createReview = (review) => {
//     return $.ajax({
//         method: 'POST',
//         url: `/api/products/${review.product_id}/reviews`,
//         data: { review }
//     })
// }