import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ITEM_ERRORS = "RECEIVE_CART_ITEM_ERRORS";
export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";

const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
});

const removeCartItems = (cartItems) => ({
    type: REMOVE_CART_ITEMS,
    cartItems
});

const receiveCartItemErrors = errors => ({
    type: RECEIVE_CART_ITEM_ERRORS,
    errors
});



export const fetchCartItems = () => dispatch => {
    return CartItemAPIUtil.fetchCartItems().then(cartItems => (
        dispatch(receiveCartItems(cartItems))
    ))
};

export const fetchCartItem = (cartItemId) => dispatch => {
    return CartItemAPIUtil.fetchCartItem(cartItemId).then(cartItem => (
        dispatch(receiveCartItem(cartItem))
    ))
};

export const createCartItem = (cartItem) => dispatch => {
    return CartItemAPIUtil.createCartItem(cartItem).then(cartItem => (
        dispatch(receiveCartItem(cartItem))
    ))
};

// export const updateCartItem = (cartItem, cartItemId) => dispatch => {
//     return CartItemAPIUtil.updateCartItem(cartItem, cartItemId).then(cartItem => (
//         dispatch(receiveCartItem(cartItem))
//     ))
// };

export const updateCartItem = (cartItem) => dispatch => {
    return CartItemAPIUtil.updateCartItem(cartItem).then(cartItem => (
        dispatch(receiveCartItem(cartItem))
    ))
};

export const destroyCartItem = (cartItemId) => dispatch => {
    return CartItemAPIUtil.destroyCartItem(cartItemId).then(cartItemId => (
        dispatch(removeCartItem(cartItemId))
    ))
};

export const destroyCartItems = () => dispatch => {
    return CartItemAPIUtil.destroyCartItems().then(cartItems => (
        dispatch(removeCartItems(cartItems))
    ))
};