import { ADD_TO_CART, CLEAR_CART, REMOVE_ONE_FROM_CART, GET_PRODUCT } from "../../types";


export const initialState = {
  cart: [],
  product: []
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        product: action.payload
      }
    }
    case ADD_TO_CART: {
      let itemnew = state.product.find((producto) => producto.id === action.payload.id)
      let indice = state.product.indexOf(itemnew)
      state.product.splice(indice,1)
      return {
        ...state,
        cart: [...state.cart, itemnew]
      }
    }
    case REMOVE_ONE_FROM_CART: {
      let addCart = state.cart.filter((item)=>item.id === action.payload)
      state.product.push(addCart[0])
      return {
        ...state,
        cart: state.cart.filter((item)=>item.id !== action.payload)
      }
    }
    case CLEAR_CART: {
      state.cart.map((carrito) => {
        state.product.push(carrito)
      })
      return {...state,cart:initialState.cart}
    }
    
    default:
      return state;
  }
}
