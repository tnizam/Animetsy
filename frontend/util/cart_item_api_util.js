export const fetchCartItems = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/cart_items'
    })
};

//dont need a show for each product in the cart
// export const fetchCartItem = (cartItemId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/cart_items/${cartItemId}`
//     })
// };

export const createCartItem = (cartItem) => {
    return $.ajax({
        method: 'POST',
        url: '/api/cart_items',
        data: { cartItem }
    })
};

export const updateCartItem = (cartItem, id) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cart_items/${id}`,
        data: { cartItem }
    })
};

export const destroyCartItem = (cartItemId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${cartItemId}`
    })
};