import React,{Component } from 'react';
import face from './faceapp.PNG';

export default class Projects extends Component {
  render(){
    return(
     
<div className="projectsection">
<div className="projectone">
  <img src={face} alt="da" className="faceapp" />
  <div class="middle">
    <div class="text">John Doe</div>
  </div>
</div>
<div className="projecttwo">

</div>
<div className="projectthree"></div>
   
 
 
</div>

    )
  }
}