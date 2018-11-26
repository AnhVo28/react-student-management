import React, { Component } from 'react';
import './App.css';
import AdminIndex from './containers/adminIndex'
import SignIn from './containers/signIn'
import HomeIndex from './containers/homeIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminIndex}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/" component={HomeIndex}/>
        </Switch>
      </BrowserRouter>
    
    
    );
  }
}

export default App;
