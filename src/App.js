import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Navigationnew from './Navigationnew';
import { Route, Switch } from 'react-router';
import About from './About';
import Aboutme from './Aboutme';
import Projects from './Projects';

export default  class App extends Component {
  render() {
    return (
      <div>
       <Logo />
       <hr></hr>
          <Navigationnew />
          <hr></hr>
          <Route path='/' component={Routes} /> 
            
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

