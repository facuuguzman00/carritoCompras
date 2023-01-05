import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {shoppingReducer} from "./reducer/shopCartReducer";

const store = createStore(shoppingReducer, applyMiddleware(thunk));

export default store;