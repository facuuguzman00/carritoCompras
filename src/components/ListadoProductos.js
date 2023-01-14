import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { addToCart, getProduct } from "../store/actions/cardActions";

function ListadoProductos() {
  const [productos, setProductos] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  

  return (
    <div>
      <h1>PRODUCTOS </h1>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <div style={{ marginRight: "2%" }}>
          <NavLink to="/CarritoCompras">
            <Button variant="outlined">Ir al Carrito</Button>
          </NavLink>
        </div>
      </Grid>
      <hr />
      {state.product.length > 0 ? (
        <div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="center"
          >
            {state.product.map((prod) => (
              <Card sx={{ maxWidth: 345 }} style={{ margin: "3%" }} key={prod.id}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={prod.image}
                  style={{ width: "100%" }}
                  title={prod.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    $ {prod.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      dispatch(addToCart(prod));
                      alert("Se agrego correctamente");
                    }}
                  >
                    Agregar{" "}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </div>
      ) : (
        <h3>Obteniendo productos...</h3>
      )}
    </div>
  );
}

export default ListadoProductos;
