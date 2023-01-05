import { ADD_TO_CART, CLEAR_CART, REMOVE_ONE_FROM_CART } from "../../types";

export const addToCart = (productos) => ({
  type: ADD_TO_CART,
  payload: productos,
});

export const delFromCart = (id) => ({
  type: REMOVE_ONE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({ type: CLEAR_CART });
