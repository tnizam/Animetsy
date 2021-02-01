import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productReducer from "./product_reducer"
import ReviewsReducer from "./review_reducer"
import CartItemReducer from "./cart_item_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  reviews: ReviewsReducer,
  cartItems: CartItemReducer
  
});

export default entitiesReducer;

