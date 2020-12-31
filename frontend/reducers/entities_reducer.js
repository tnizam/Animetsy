import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productReducer from "./product_reducer"
import ReviewsReducer from "./review_reducer"
import cartItemReducer from "./cart_item_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  reviews: ReviewsReducer,
  cartItems: cartItemReducer
  
});

export default entitiesReducer;

