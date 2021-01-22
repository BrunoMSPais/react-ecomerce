import React, { useEffect } from "react";
import './App.css';
import LogIn from "./components/logIn/LogIn";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Payment from "./components/payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51ICDa0APAqpealN7loJBX5ySgYvYcj7scFY7x334bT0cl6nLqOlVFQbPjnhnuZybIIvnisw4Q3zkKiKWjfsfCxEt00rJ3D54UH'
);


function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser)

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <LogIn />
          </Route>
          
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
