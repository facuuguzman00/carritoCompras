import React, { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import { delFromCart, clearCart } from "../store/actions/cardActions";

const CarritoCompras = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Carrito: </h1>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <div style={{ marginLeft: "2%" }}>
          <NavLink to="/">
            <Button variant="outlined">Volver a los productos</Button>
          </NavLink>
        </div>
      </Grid>
      <hr />
      {state.cart.map((cart) => (
        <div>
          <List
            sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}
            key={cart.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar src={cart.image}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={cart.title} secondary={"$" + cart.price} />
            </ListItem>
          </List>
          <Button onClick={() => dispatch(delFromCart(cart.id))}>
            {" "}
            Eliminar{" "}
          </Button>
          <hr></hr>
        </div>
      ))}
      <h2>
        Total: $
        {state.cart
          .map((i) => i.price)
          .reduce((partialSum, a) => partialSum + a, 0)}
      </h2>
      <Button onClick={() => dispatch(clearCart())}>LIMPIAR CARRITO </Button>
    </div>
  );
};

export default CarritoCompras;
