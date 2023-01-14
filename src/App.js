import "./App.css";
import React, { useEffect, useState, useReducer } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import ListadoProductos from './components/ListadoProductos';
import CarritoCompras from './components/CarritoCompras';
import { getProduct } from "./store/actions/cardActions";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ListadoProductos/>,
  },
  {
    path: "/CarritoCompras",
    element: <CarritoCompras/>
  }
]);


function App() {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getProduct())
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
