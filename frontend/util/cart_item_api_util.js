export const fetchCartItems = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/cart_items'
    })
};

//dont need a show for each product in the cart
export const fetchCartItem = (cartItemId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/cart_items/${cartItemId}`
    })
};

export const createCartItem = (cartItem) => {
    return $.ajax({
        method: 'POST',
        url: '/api/cart_items',
        data: { cart_item: cartItem }
    })
};

// export const updateCartItem = (cartItem, cartItemId) => {
//     return $.ajax({
//         method: 'PATCH',
//         url: `/api/cart_items/${cartItemId}`,
//         data: { cart_item: cartItem }
//     })
// };

export const updateCartItem = (cartItem) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/cart_items/${cartItem.id}`,
        data: { cart_item: cartItem }
    })
};

export const destroyCartItem = (cartItemId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${cartItemId}`
    })
};