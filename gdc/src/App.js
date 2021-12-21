import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AboutUs from './components/AboutUs';
import NavBar from  './components/NavBar';
import Homepage from './components/Homepage';
import Products from './components/Products';

class App extends React.Component {
  render() {
    
    return (
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

    );
  }
}

export default App;