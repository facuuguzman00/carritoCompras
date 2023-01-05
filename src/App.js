import "./App.css";
import React, { useEffect, useState, useReducer } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListadoProductos from './components/ListadoProductos';
import { shoppingReducer, initialState } from "./store/reducer/shopCartReducer";
import CarritoCompras from './components/CarritoCompras';

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
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <h1>Ver productos </h1> */}
      {/* <ListadoProductos /> */}
    </div>
  );
}

export default App;
