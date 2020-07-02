import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import "./App.css";
import SigninAndSignup from "./pages/signin-and-signup/SigninAndSignup";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
