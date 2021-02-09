import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root"

//test import
import { login, logout, signup } from "./actions/session_actions";
import { allProducts, eachProduct } from "./actions/product_actions"

import { createReview, fetchReviews, destroyReview, updateReview } from "./util/review_api_util";
import { createCartItem, destroyCartItem, fetchCartItems, updateCartItem, destroyCartItems } from "./util/cart_item_api_util";


document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  // remember to comment/DELETEEEE out!
  window.$ = $;
  window.fetchCartItems = fetchCartItems;
  window.createCartItem = createCartItem;
  window.updateCartItem = updateCartItem;
  window.destroyCartItem = destroyCartItem;
  window.destroyCartItems = destroyCartItems;

  window.fetchReviews = fetchReviews;
  window.createReview = createReview;
  window.destroyReview = destroyReview;
  window.updateReview = updateReview;

  window.allProducts = allProducts;
  window.eachProduct = eachProduct;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
});
//window.createReview({body: "greatttt", rating: 5, product_id: 32, author_id: 1}, 32)