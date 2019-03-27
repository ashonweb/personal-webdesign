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
import Resume from './Resume';
export default  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
      bhagya:false,
      showResume:false,
    }
  }

  updateContactVisibility = (showContact) => {
    this.setState({
      showContact,
      
    })
  }
  updateResumeVisibility = (showResume) =>{
    this.setState({
      showResume,
      
    })
  }

  render() {    
    return (
      <div>
       <Logo />
       <hr></hr>
          <Navigationnew updateContactVisibility={this.updateContactVisibility} updateResumeVisibility={this.updateResumeVisibility} />
          <hr></hr>
          <Route path='/' render={() => <Routes
            showContact={this.state.showContact}
            showResume = {this.state.showResume}
            updateContactVisibility={this.updateContactVisibility}
            updateResumeVisibility = {this.updateResumeVisibility}
            />}
          />          
          <h5>Designed by B.Meghpal</h5>
          <hr className="endfooter"></hr>
      </div>
    );
  }
}

const Routes = ({ showContact,showResume,updateContactVisibility ,updateResumeVisibility}) => {
  console.log(showContact);
  console.log(showResume);
  return (  
    <Switch>
      <Route exact path='/' render={() => (        
        <div>
          {
            
            showContact &&
            <div><Contact showContact={showContact} updateContactVisibility={updateContactVisibility}/></div>
          }
          {
            showResume &&
            <div> <Resume showResume={showResume} updateResumeVisibility={updateResumeVisibility}/></div>
          }
          
          <Aboutme />
          <hr></hr>
          <Projects />  
          
               
        </div>      
      )}
      />
      {/* <Route exact path='/resume' component={Blog} />
      {/* <Route exact path='/contact' component={Contact} /> */}
      {/* <Route exact path = '/htmlblog' component={Html} />
      <Route exact path = '/jsblog' component={Jsblog} />
      <Route exact path = '/reactblog' component={Reactblog} />  */}

    </Switch>
  );
}

