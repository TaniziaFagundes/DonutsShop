import React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Product />
      </Route>
      <Route path="/carrinho" exact>
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
