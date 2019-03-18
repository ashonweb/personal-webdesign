import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Navigationnew from './Navigationnew';
import { Route, Switch } from 'react-router';
import About from './About';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Footer from './Footer';

export default  class App extends Component {
  render() {
    return (
      <div>
       <Logo />
       <hr></hr>
          <Navigationnew />
          <hr></hr>
          <Route path='/' component={Routes} /> 
          
          <h5>Designed by B.Meghpal</h5>
          <hr></hr>
      </div>
    );
  }
}

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <div>
        <Aboutme />
        <hr></hr>
        <Projects />
        
      </div>      
    )}
    />
    <Route exact path='/blog' component={About} />
  </Switch>
);

