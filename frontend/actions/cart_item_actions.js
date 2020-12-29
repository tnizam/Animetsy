import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ITEM_ERRORS = "RECEIVE_CART_ITEM_ERRORS";

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

const receiveCartItemErrors = errors => ({
    type: RECEIVE_CART_ITEM_ERRORS,
    errors
});



export const fetchCartItems = () => dispatch => {
    return CartItemAPIUtil.fetchCartItems().then(cartItems => (
        dispatch(receiveCartItems(cartItems))
    ))
};

export const createCartItem = (cartItem) => dispatch => {
    return CartItemAPIUtil.createCartItem(cartItem).then(cartItem => (
        dispatch(receiveCartItem(cartItem))
    ))
};

export const updateCartItem = (cartItem, cartItemId) => dispatch => {
    return CartItemAPIUtil.updateCartItem(cartItem, cartItemId).then(cartItem => (
        dispatch(receiveCartItem(cartItem))
    ))
};

export const destroyCartItem = (cartItemId) => dispatch => {
    return CartItemAPIUtil.destroyCartItem(cartItemId).then(cartItemId => (
        dispatch(removeCartItem(cartItemId))
    ))
};