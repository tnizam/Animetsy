import {RECEIVE_CART_ITEMS, 
        RECEIVE_CART_ITEM,
        REMOVE_CART_ITEM} from '../actions/cart_item_actions'

const cartItemReducer = (oldState = {}, action) => {
    let nextState = Object.assign({}, oldState);
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId];
            return nextState;
        default:
            return oldState;
    }
}

export default cartItemReducer;
