import {RECEIVE_CART_ITEMS, 
        RECEIVE_CART_ITEM,
        REMOVE_CART_ITEM,
        REMOVE_CART_ITEMS} from '../actions/cart_item_actions'

const CartItemReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId];
            return nextState;
        case REMOVE_CART_ITEMS:
            delete nextState[action.cartItems];
            return nextState;
        default:
            return oldState;
    }
}

export default CartItemReducer;
