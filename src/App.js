import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';
import './responsive.css';
import './App.css';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
       <Content />
      </div>
    );
  }
}

export default App;
