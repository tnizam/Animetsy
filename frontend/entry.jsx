import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root"

//test import
import { login, logout, signup } from "./actions/session_actions";
import { allProducts, eachProduct } from "./actions/product_actions"


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

  // remeber to comment out!
  window.$ = $;
  window.allProducts = allProducts;
  window.eachProduct = eachProduct;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
});
