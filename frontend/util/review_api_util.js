
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