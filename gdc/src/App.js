import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AboutUs from './components/AboutUs';
import NavBar from  './components/NavBar';
import Homepage from './components/Homepage';

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <>
      <Homepage />
      </>
=======

      <Router>

        <NavBar/>

        <Route exact path ='/'>
          <Homepage/>
        </Route>

        <Route exact path ='/products'>
          <Products/>
        </Route>

        <Route exact path='/about-us'>
          <AboutUs/>
        </Route>

      </Router>

>>>>>>> 5ecaa02dc5607b3e2e6fdd0d83cdc3781910cf41
    );
  }
}

export default App;