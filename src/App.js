import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Navigationnew from './Navigationnew';
import { Route, Switch } from 'react-router';
import Blog from './Blog';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from'./Contact';
export default  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
    }
  }

  updateContactVisibility = (showContact) => {
    this.setState({
      showContact,
    })
  }

  render() {    
    return (
      <div>
       <Logo />
       <hr></hr>
          <Navigationnew updateContactVisibility={this.updateContactVisibility} />
          <hr></hr>
          <Route path='/' render={() => <Routes showContact={this.state.showContact} />} /> 
          
          <h5>Designed by B.Meghpal</h5>
          <hr className="endfooter"></hr>
      </div>
    );
  }
}

const Routes = ({ showContact }) => {
  console.log(showContact);
  return (  
    <Switch>
      <Route exact path='/' render={() => (        
        <div>
          {
            showContact &&
            <div><Contact/></div>
          }
          <Aboutme />
          <hr></hr>
          <Projects />        
        </div>      
      )}
      />
      <Route exact path='/blog' component={Blog} />
      {/* <Route exact path='/contact' component={Contact} /> */}
  
    </Switch>
  );
}

