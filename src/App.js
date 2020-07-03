import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SigninAndSignup from "./pages/signin-and-signup/SigninAndSignup";
import { auth } from "./firebase/firebase-utils";

import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}
export default App;
