import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Confirmation from "./components/Confirmation";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const quantities = JSON.parse(localStorage.getItem("quantities")) || [];
    dispatch({
      type: "SET_CART_VALUES",
      payload: { cart: cart, quantities: quantities },
    });
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/order" component={Order} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
