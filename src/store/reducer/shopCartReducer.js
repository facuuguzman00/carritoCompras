import { ADD_TO_CART, CLEAR_CART, REMOVE_ONE_FROM_CART } from "../../types";


export const initialState = {
  cart: [],
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let item = action.payload
      return {
        ...state,
        cart: [...state.cart, item]
      }
    }
    case REMOVE_ONE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item)=>item.id !== action.payload)
      }
    }
    case CLEAR_CART: {
      return initialState
    }
    
    default:
      return state;
  }
}
