import React from "react";
import { Switch, Route } from "react-router-dom";

import CrustPizza from "../screens/CrustPizza";
import SizePizza from "../screens/SizePizza";
import ToppingsPizza from "../screens/ToppingsPizza";
import ViewPizza from "../screens/ViewPizza";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SizePizza} />
    <Route path="/crust" component={CrustPizza} />
    <Route path="/toppings" component={ToppingsPizza} />
    <Route path="/view" component={ViewPizza} />
  </Switch>
);

export default Routes;
