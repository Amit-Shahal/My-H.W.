import React, { useState } from 'react'
import LogIn from './LogIn'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Shop from './Shop';
import CheckOut from './CheckOut';

export default function FCMain(props) {

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [id, setId] = useState(-1);


  const getDataFromLogin = (isLoged, studentId) => {
    setId(studentId);
    if (isLoged) {
      setIsLogedIn(true);
    }
    
  };

  const getDataFromShop = (product) => {
    alert("Added to cart: " + product.Name);
    let pro = cart.find(p => {
      if (p.SerialNumber === product.SerialNumber) {
        p.Amount += 1;
      }
      return p.SerialNumber === product.SerialNumber;
    });
    console.log(pro);
    if (pro === undefined) {
      cart.push(
        {
          "StudentId": id,
          "Amount": 1,
          "SerialNumber": product.SerialNumber,
          "Name": product.Name
        }
      );
    }
    setCart(cart);
  };


  return (
    <Router>

      <Header isLogedIn={isLogedIn}></Header>

      <Switch>
        <Route exact path="/">
          <LogIn sendDataToParent={getDataFromLogin}></LogIn>
        </Route>
        <Route path="/shop">
          <Shop sendDataToParent={getDataFromShop} />
        </Route>
        <Route path="/dashboard">
          <CheckOut cart={cart}/>
        </Route>
      </Switch>

    </Router >
  );
}
