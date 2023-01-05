import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {shoppingReducer} from "./reducer/shopCartReducer";

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(shoppingReducer, applyMiddleware(thunk));

export default store;