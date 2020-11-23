import { RECEIVE_ALL_PRODUCTS, 
        RECEIVE_EACH_PRODUCT } from '../actions/product_actions'

const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_EACH_PRODUCT:
            // debugger
            let nextState = Object.assign({}, oldState);
            nextState[action.product.id] = action.product;
            return nextState;
        default:
            return oldState;
    }
}

export default productReducer;