import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';
import About from './About';
import {  Route, Switch } from 'react-router';
import SkillsExperience from './SkillsExperience';

// class App extends Component {
//   render() {
//     return (
//       <div>      
//         <Switch>
//           <Route exact path='/' render={() => (
//             <div>
//               <Navigation />
//               <Content />
//             </div>          
//           )}/>
//           <Route exact path='/about' component={About} />} />              
//         </Switch>                    
//       </div>
//     );
//   }
// }

// export default App;

export default class App extends Component {
  render() {
    return (
      <div>      
        <Navigation />
        <Route path='/' component={Routes} />                     
      </div>
    );
  }
}

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => (
      <div>        
        <Content />
      </div>          
    )}/>
    <Route exact path='/about' component={About} />} /> 
    <Route exact path='/skills' component={SkillsExperience} />} />   
  
  </Switch>
);
