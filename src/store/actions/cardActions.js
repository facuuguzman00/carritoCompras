import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ONE_FROM_CART,
  GET_PRODUCT,
} from "../../types";
import axios from "axios";


export const addToCart = (productos) => ({
  type: ADD_TO_CART,
  payload: productos,
});

export const delFromCart = (id) => ({
  type: REMOVE_ONE_FROM_CART,
  payload: id,
});

export const clearCart = (carts) => ({ type: CLEAR_CART });

export const getProduct = () => async dispatch => {
  try{
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
          if(response) {
            dispatch({
              type:GET_PRODUCT,
              payload: response.data
            })
          }
        }).catch((err) => console.log(err));
  }
  catch(e){
    console.log(e)
  }
};
