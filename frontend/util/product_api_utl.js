export const allProducts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/products',
    })
};

export const eachProduct = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
};

