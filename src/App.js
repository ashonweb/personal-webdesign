import React, { Component } from 'react';
import './App.css';
import Logo from './Logo';
import Navigationnew from './Navigationnew';
import { Route, Switch } from 'react-router';
import Blog from './Blog';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from'./Contact';
import Html from './Html';
import Jsblog from './Jsblog';
import Reactblog from './Reactblog';
export default  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
      bhagya:false,
    }
  }

  updateContactVisibility = (showContact) => {
    this.setState({
      showContact,
      
    })
  }

  render() {    
    return (
      <div className={this.state.showContact ? "whatever" : ""}>
       <Logo />
       <hr></hr>
          <Navigationnew updateContactVisibility={this.updateContactVisibility} />
          <hr></hr>
          <Route path='/' render={() => <Routes
            showContact={this.state.showContact}
            updateContactVisibility={this.updateContactVisibility}
            />}
          />          
          <h5>Designed by B.Meghpal</h5>
          <hr className="endfooter"></hr>
      </div>
    );
  }
}

const Routes = ({ showContact, updateContactVisibility }) => {
  console.log(showContact);
  return (  
    <Switch>
      <Route exact path='/' render={() => (        
        <div>
          {
            
            showContact &&
            <div><Contact showContact={showContact} updateContactVisibility={updateContactVisibility}/></div>
          }
          
          <Aboutme />
          <hr></hr>
          <Projects />  
          
               
        </div>      
      )}
      />
      <Route exact path='/blog' component={Blog} />
      {/* <Route exact path='/contact' component={Contact} /> */}
      <Route exact path = '/htmlblog' component={Html} />
      <Route exact path = '/jsblog' component={Jsblog} />
      <Route exact path = '/reactblog' component={Reactblog} />

    </Switch>
  );
}

